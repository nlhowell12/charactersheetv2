import { assignClassSkills } from 'helpers/skillHelpers'

export default {
  'Barbarian': {
    HD: 'd12',
    skillPoints: 4,
    skills: assignClassSkills([
      'climb', 'craft', 'handle animal', 
      'intimidate', 'swim', 'ride', 
      'perception', 'survival', 'swim'])
  },
  'Bard': {
    HD: 'd8',
    skillPoints: 6,
    skills: assignClassSkills([
      'acrobatics', 'artifice', 'bluff', 'climb',
      'concentration', 'craft', 'decipher script',
      'diplomacy', 'disguise', 'escape artist',
      'arcana', 'architecture and engineering',
      'dungeoneering', 'history', 'local',
      'military and tactics', 'nature', 'psionics', 
      'religion', 'the planes', 'magecraft', 'perception',
      'sense motive', 'stealth', 'sleight of hand', 'swim']) 
  },
  'Binder': {
    HD: 'd8',
    skillPoints: 2,
    skills: assignClassSkills([
      'artifice', 'bluff', 'craft',
      'decipher script', 'diplomacy', 'disguise',
      'escape artist', 'intimidate', 'arcana',
      'history', 'local', 'religion'])
  },
  'Cleric': {
    HD: 'd8',
    skillPoints: 2,
    skills: assignClassSkills([
      'concentration', 'craft', 'diplomacy',
      'heal', 'arcana', 'history',
      'religion', 'the planes', 'magecraft'])
  },
  'Druid': {
    HD: 'd8',
    skillPoints: 4,
    skills: assignClassSkills([
      'concentration', 'craft', 'diplomacy',
      'handle animal', 'heal', 'nature',
      'magecraft', 'perception', 'ride',
      'survival', 'swim'])
  },
  'Fighter': {
    HD: 'd10',
    skillPoints: 2,
    skills: assignClassSkills([
      'climb', 'craft', 'handle animal',
      'intimidate', 'ride', 'swim'])
  },
  'Hexblade': {
    HD: 'd8',
    skillPoints: 2,
    skills: assignClassSkills([
      'bluff', 'concentration', 'craft',
      'diplomacy', 'intimidate', 'arcana',
      'magecraft', 'ride'
    ])
  },
  'Monk': {
    HD: 'd8',
    skillPoints: 4,
    skills: assignClassSkills([
      'acrobatics', 'autohypnosis', 'climb',
      'concentration', 'craft', 'diplomacy',
      'escape artist', 'arcana', 'nature',
      'religion', 'perception', 'perform',
      'sense motive', 'stealth', 'swim'
    ])
  },
  'Oathsworn': {
    HD: 'd10',
    skillPoints: 4,
    skills: assignClassSkills([
      'climb', 'concentration', 'craft',
      'diplomacy', 'handle animal', 'heal',
      'dungeoneering', 'nature', 'nobility and royalty',
      'religion', 'perception', 'ride', 
      'sense motive', 'stealth', 'survival',
      'swim', 'use rope'
    ])
  },
  'Psion': {
    HD: 'd4',
    skillPoints: 2,
    skills: assignClassSkills([
      'concentration', 'craft', 'arcana',
      'architecture and engineering', 'dungeoneering', 'history',
      'local', 'military and tactics', 'nature',
      'nobility and royalty', 'psionics', 'religion',
      'the planes', 'magecraft'
    ])
  },
  'Psychic Warrior': {
    HD: 'd8',
    skillPoints: 2,
    skills: assignClassSkills([
      'acrobatics', 'autohypnosis', 'climb',
      'concentration', 'craft', 'psionics',
      'perception', 'ride', 'swim'
    ])
  },
  'Rogue': {
    HD: 'd6',
    skillPoints: 8,
    skills: assignClassSkills([
      'acrobatics', 'artifice', 'bluff',
      'climb', 'craft', 'decipher script',
      'diplomacy', 'disguise', 'escape artist',
      'forgery', 'intimidate', 'local',
      'perception', 'perform', 'sense motive',
      'sleight of hand', 'stealth', 'swim',
      'use rope'
    ])
  },
  'Shadowcaster': {
    HD: 'd4',
    skillPoints: 2,
    skills: assignClassSkills([
      'concentration', 'craft', 'intimidate',
      'arcana', 'the planes', 'magecraft',
      'perception', 'stealth'
    ])
  },
  'Sorcerer': {
    HD: 'd4',
    skillPoints: 2,
    skills: assignClassSkills([
      'bluff', 'concentration', 'craft',
      'arcana', 'magecraft'
    ])
  },
  'Warlock': {
    HD: 'd6',
    skillPoints: 4,
    skills: assignClassSkills([
      'bluff', 'concentration', 'craft',
      'disguise', 'intimidate', 'arcana',
      'the planes', 'religion', 'magecraft',
      'sense motive'
    ])
  },
  'Wizard': {
    HD: 'd4',
    skillPoints: 2,
    skills: assignClassSkills([
      'concentration', 'craft', 'decipher script', 'arcana',
      'architecture and engineering', 'dungeoneering', 'history',
      'local', 'military and tactics', 'nature',
      'nobility and royalty', 'psionics', 'religion',
      'the planes', 'magecraft'
    ])
}
}