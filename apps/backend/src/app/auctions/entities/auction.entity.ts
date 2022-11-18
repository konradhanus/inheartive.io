import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

@Entity()
export class Auction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  minPrice: number;

  @ManyToOne((type) => Category, (category) => category.auctions)
  category: Category;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  upodatedAt: Date;
}
