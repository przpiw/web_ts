import { User } from "./models/User";
import axios from 'axios'
let user = new User({})
user.on('changed',()=>{
    console.log('Changed 1')
})
user.on('changed',()=>{console.log("changed 2")})
user.on('removed',()=>{console.log('Removed was triggered')})

user.trigger('changed')

user.set({age:99,name:'John SMith'})
//user.save()