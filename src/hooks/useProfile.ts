import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { userApi, UserProfile } from '@/api'

export const useProfile = (options?: Omit<UseQueryOptions<UserProfile>, 'queryKey' | 'queryFn'>) => {
  return useQuery<UserProfile>({
    ...options,
    queryKey: ['profile'],
    queryFn: userApi.getProfile,
  })
}
