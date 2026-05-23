import { describe, expect, test } from 'vitest'
import { page } from '@vitest/browser/context'
import { MIN_RACE_NUM } from '@/utils/constant';

describe('Race panel to always display three filters', () => {
  test('User can see three filters', () => {
    const filters = page.getByTestId('filter-item').all();
    expect(filters.length).toBe(3);
  })

  test('If timestamp is more than 1 minute old, the race should not appear', () => { })
})

// describe('Race panel to always display races', () => {
//   test('When filters are selected, there should always see at most five races', () => {
//     const filters = page.getByTestId('filter-item').all();
//     const races = page.getByTestId('race-item').all();
//     expect(races.length).toBeLessThan(MIN_RACE_NUM);
//   })
//   test('When no filters are selected, there should always see five races', () => {
//     const filters = page.getByTestId('filter-item').all();
//     const races = page.getByTestId('race-item').all();
//     expect(races.length).toBeLessThan(MIN_RACE_NUM);
//   })
// })