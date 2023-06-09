export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Drawing: {
        Row: {
          created_at: string
          data: Json
          id: number
          name: string
          userId: string
        }
        Insert: {
          created_at?: string
          data: Json
          id?: number
          name: string
          userId: string
        }
        Update: {
          created_at?: string
          data?: Json
          id?: number
          name?: string
          userId?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
