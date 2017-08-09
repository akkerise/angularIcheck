/**
 * Created by idea on 20/03/2017.
 */
export class UtilityService {
    constructor() {
    }

    static route(route:string, id?:string):string {
        var link:string = '/home';
        switch (route) {
            case ROUTE_LOGIN:
                link = '/login';
                break;
            case ROUTE_BROWSER:
                link = '/categories/' + id;
                break;
            case ROUTE_DETAIL:
                link = '/product/detail/' + id;
                break;
            case ROUTE_CATEGORIES:
                link = '/categories';
                break;
            case ROUTE_HOME:
                link = '/home';
                break;
            case ROUTE_CONTACT:
                link = '/contact';
                break;
            case ROUTE_FOLLOW:
                link = '/follow';
                break;
            case ROUTE_TOP_PRODUCT:
                link = '/top/products';
                break;
            case ROUTE_TOP_USER:
                link = '/top/users';
                break;
            case ROUTE_TOP_GROUP:
                link = '/top/groups';
                break;
            case ROUTE_NEWS:
                link = '/news';
                break;
            case ROUTE_NEWS_DETAIL:
                link = '/news/' + id;
                break;
            case ROUTE_NOT_FOUND:
                link = '**';
                break;
            case ROUTE_PROFILE:
                link = '/profile/'+id;
                break;
            case ROUTE_POST_DETAIL:
                link = '/post/'+id;
                break;
            default :
                link = '/home';
                break;

        }
        return link;
    }

    static rating(evaluation:number):string {
        var rate = '';
        switch (evaluation) {
            case BAD_RATE:
                rate = 'ic-danger';
                break;
            case GOOD_RATE:
                rate = 'ic-success';
                break;
            case NEUTRAL:
                rate = 'ic-warning';
                break;
            default :
            case NOT_RATE:
                rate = '';
                break;
        }
        return rate;
    }

    static convertData(data) {
        var da = [];
        for (let key in data) {
            da.push(data[key]);
        }
        return da;
    }

    static getImg(src:string = null, size:string = 'medium', type?:string) {
        var image = '/assets/images/no-image.png';
        if (src) {
            if (src.match(/^http/) || src.endsWith('.jpg')) {
                image = src
            } else {
                if (type === 'fb') {
                    image = "http://graph.facebook.com/" + src + "/picture";
                } else {
                    image = "http://ucontent.icheck.vn/" + src + '_' + size + '.jpg';
                }
            }
        }
        return image;
    }

    static targetActionName(object_type?:string, object?:any, owner_name?:string) {
        var objectName = '';
        var objectType = '';
        if (typeof object == "object") {
            if (typeof object.title !== "undefined" && object.title) {
                objectName = object.title;
            }
            if (typeof object.name !== "undefined" && object.name) {
                objectName = object.name;
            }
        }
        if (typeof object == "string") {
            objectName = object;
        }
        switch (object_type) {
            case 'product':
                objectType = 'sản phẩm';
                if (object.product) {
                    objectName = object.product.product_name;
                }
                if (object.name) {
                    objectName = object.name;
                }
                break;
            case 'new':
                objectType = 'tin tức';
                if (object.news) {
                    objectName = object.news.title;
                }
                if (object.name) {
                    objectName = object.name;
                }
                break;
            case 'post':
                default :
                if (object.is_me) {
                    objectType = 'bài viết của bạn';
                } else {
                    if (owner_name) {
                        objectType = 'bài viết của';
                        objectName = owner_name;
                    } else {
                        objectType = 'bài viết mà bạn đã bình luận';
                    }
                }
                break;
        }

        return {name: objectName, type: objectType};

    }

    static actionName(action:string) {
        var actionName = action;
        switch (action) {
            case 'like':
                actionName = 'thích';
                break;
            case 'share':
                actionName = 'chia sẻ';
                break;
            case 'comment':
                actionName = 'bình luận';
                break;
            case 'review':
                actionName = 'review';
                break;
            case 'create':
                actionName = 'tạo';
                break;
            case 'posted':
                actionName = 'post';
                break;
            case 'invite':
                actionName = 'mời';
                break;
            case 'unlike':
                actionName = 'bỏ thích';
                break;
            case 'follow':
                actionName = 'theo dõi';
                break;
            case 'unfollow':
                actionName = 'bỏ theo dõi';
                break;
            case 'reply':
                actionName = 'trả lời';
                break;
            case 'scan':
                actionName = 'quét';
                break;
            case 'view':
                actionName = 'mở';
                break;
            case 'report':
                actionName = 'tố cáo';
                break;
            case 'contribute':
                actionName = 'đóng góp';
                break;


        }
        return actionName;
    }


}
/*
 *  ROUTING MANAGER
 * */
export const ROUTE_LOGIN:string = 'LOGIN';
export const ROUTE_BROWSER:string = 'BROWSER';
export const ROUTE_DETAIL:string = 'DETAIL';
export const ROUTE_CATEGORIES:string = 'CATEGORIES';
export const ROUTE_HOME:string = 'HOME';
export const ROUTE_CONTACT:string = 'CONTACT';
export const ROUTE_FOLLOW:string = 'FOLLOW';
export const ROUTE_TOP_PRODUCT:string = 'TOP_PRODUCT';
export const ROUTE_TOP_USER:string = 'TOP_USER';
export const ROUTE_TOP_GROUP:string = 'TOP_GROUP';
export const ROUTE_NEWS:string = 'NEWS';
export const ROUTE_NEWS_DETAIL:string = 'NEW_DETAIL';
export const ROUTE_PROFILE:string = 'PROFILE';
export const ROUTE_NOT_FOUND:string = '404';
export const ROUTE_POST_DETAIL:string = 'POST_DETAIL';


/*
 * PRODUCT RATING TYPE
 * */

export const BAD_RATE:number = -1;
export const GOOD_RATE:number = 1;
export const NEUTRAL:number = 0;
export const NOT_RATE:number = -2;
