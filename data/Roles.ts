import type { Role } from '@amethyxgg/wow-forever-data/Role'

// Not ideal for package purposes to enforce image location, however can work around it.
export const ROLES: Record<string, Role> = {
  DPS: { name: 'DPS', icon: '/img/wow/dps.png' },
  Tank: { name: 'Tank', icon: '/img/wow/tank.png' },
  Healer: { name: 'Healer', icon: '/img/wow/healer.png' },
}

export default ROLES
