import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

@Entity()
export class Auction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne((type) => Category, (category) => category.auctions)
  category: Category;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  upodatedAt: Date;
}
