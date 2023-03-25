import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Auction } from '../../auctions/entities/auction.entity';
import { User } from '../../users/entities/user.entity';
@Entity('bid')
export class Bid {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne((type) => Auction, (auction) => auction.bids)
  @JoinColumn()
  auction: Auction;
  @ManyToOne((type) => User, (user) => user)
  @JoinColumn()
  user: User;
  @Column()
  value: number;
  @CreateDateColumn()
  createdAt: Date;
}
