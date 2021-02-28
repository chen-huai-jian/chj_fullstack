import { MemberHeader } from '../../components/members/memberHeader';
import { MemberEntity } from '../../model'
import { members } from './mockData';
// 假数据  前端靠假数据自给自足
// 做完页面开发后在换成真数据
// mockData

const fetchMembers = () :MemberEntity[] => {
    // promise 类
    // return Promise.resolve(members);
    return members;
}
const fetchMembersAsync = () => {

}
export const memberAPI = {
    fetchMembers,
    fetchMembersAsync,
}