import { User } from './user.model';
export interface Post {
    file?: File;
    imageUrl?: string;
    caption?: string;
    postedBy?: string;
    searchTerm?: string;
}
