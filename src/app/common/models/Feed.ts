/**
 * Created by idea on 20/03/2017.
 */
    import { Attachment } from './Attachment';
    import { Product } from './Product';
    import { News } from './News';
    import { Owner } from './Owner';

export class Feed{
    public actions : string[];
    public footer : {
        like_count: number,
        like_users?:Owner[],
        comment_count: number,
        is_like: boolean,
        my_vote: number,
        can_comment: boolean,
        can_like: boolean,
        can_share: boolean,
        is_subscribe: boolean
    };
    public body : {
        id: any,
        attachments : Attachment[],
        content: string,
        product: Product,
        type: string,
        news: News,
        post: Feed,
    };
    public header: {
        owner: Owner,
        create_at: number,
        target: {
            id : string | number,
            type: string,
            name: string
        }
    };
    public created_at:number;
    public id : number | string;
    public title: {
    action : string,
    actors: Owner[],
    actor_count: number
};
    constructor(

    ){}
}