import { SimplePool } from 'nostr-tools/pool'
import * as nip19 from 'nostr-tools/nip19'

const SOURCE_NPUB = 'npub1equrmqway3qxw3dkssymusxkwgwrqypfgeqx0lx9pgjam7gnj4ysaqhkj6'

const DEFAULT_RELAYS = [
  'wss://relay.ditto.pub',
  'wss://relay.damus.io',
  'wss://relay.primal.net',
  'wss://nos.lol'
]

const toSiteTitle = (event) => {
  const titleTag = (event.tags || []).find((tag) => tag[0] === 'title')
  if (titleTag?.[1]) return titleTag[1]

  const dTag = (event.tags || []).find((tag) => tag[0] === 'd')
  if (dTag?.[1]) return dTag[1]

  return 'Unnamed Nsite'
}

const toSiteKey = (event) => {
  const dTag = (event.tags || []).find((tag) => tag[0] === 'd')
  return `${event.pubkey}:${dTag?.[1] || 'root'}`
}

export const useNsiteExplore = () => {
  const pool = new SimplePool()
  const sourcePubkey = nip19.decode(SOURCE_NPUB).data

  const fetchTemplateSites = async (limit = 250, relays = DEFAULT_RELAYS) => {
    const events = await pool.querySync(relays, {
      kinds: [15128, 35128],
      limit
    })

    const related = events.filter((event) => {
      const tags = event.tags || []
      return tags.some((tag) => {
        if (!['muse', 'thief'].includes(tag[0])) return false
        return tag.some((cell) => String(cell).toLowerCase() === sourcePubkey)
      })
    })

    const deduped = new Map()
    for (const event of related) {
      const key = toSiteKey(event)
      const previous = deduped.get(key)
      if (!previous || event.created_at > previous.created_at) deduped.set(key, event)
    }

    return Array.from(deduped.values())
      .sort((a, b) => b.created_at - a.created_at)
      .map((event) => {
        const npub = nip19.npubEncode(event.pubkey)
        return {
          id: event.id,
          npub,
          title: toSiteTitle(event),
          kind: event.kind,
          createdAt: event.created_at,
          nsiteRunUrl: `https://${npub}.nsite.run`,
          nsiteLolUrl: `https://${npub}.nsite.lol`
        }
      })
  }

  return {
    sourceNpub: SOURCE_NPUB,
    defaultRelays: DEFAULT_RELAYS,
    fetchTemplateSites
  }
}
