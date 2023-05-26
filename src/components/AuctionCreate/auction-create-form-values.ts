export interface AuctionFormValues {
  title: string;
  description: string;
  category: string;
  location?: string;
  price: number;
  expiresAt: Date;
}
