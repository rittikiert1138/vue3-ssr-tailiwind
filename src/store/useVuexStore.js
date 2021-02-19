import { createStore } from 'vuex';
import { inject, provide } from 'vue';
import { post } from './post'
import { user } from './user'
// import axios from 'axios';

const StoreSymbol = Symbol('vuex-store')

export function _createStore() {
  return createStore({
    modules: {
      post,
      user
    },
    state() {
      return {
          titlepage: '',
          desc: '',
          content: ''
      }
    },
    actions: {
      setmetaHome({ commit }) {
        commit("setmetaHome")
      },
      setmetaUser({ commit }) {
        commit("setmetaUser")
      },
      setmetaProfile({ commit }) {
        commit("setmetaProfile")
      },
    },
    mutations: {
      setmetaHome(state) {
        state.titlepage = 'Postpage Title',
        state.desc = 'เตรียมความพร้อมกู้ซื้อบ้าน ผ่านฉลุย กู้ซื้อบ้าน อนุมัติไว ทำได้ เพียงเตรียมความพร้อมทุกขั้นตอนการกู้ Home',
        state.content = 'รวมเรื่องน่ารู้การกู้ซื้อบ้าน ตอบทุกข้อสงสัยเคลียร์ทุกขั้นตอนของการซื้อบ้าน Home'
      },
      setmetaUser(state) {
        state.titlepage = 'Userpage Title',
        state.desc = 'เตรียมความพร้อมกู้ซื้อบ้าน ผ่านฉลุย กู้ซื้อบ้าน อนุมัติไว ทำได้ เพียงเตรียมความพร้อมทุกขั้นตอนการกู้ User',
        state.content = 'รวมเรื่องน่ารู้การกู้ซื้อบ้าน ตอบทุกข้อสงสัยเคลียร์ทุกขั้นตอนของการซื้อบ้าน User'
      },
      setmetaProfile(state) {
        state.titlepage = 'setProfile Title',
        state.desc = 'เตรียมความพร้อมกู้ซื้อบ้าน ผ่านฉลุย กู้ซื้อบ้าน อนุมัติไว ทำได้ เพียงเตรียมความพร้อมทุกขั้นตอนการกู้ setProfile',
        state.content = 'รวมเรื่องน่ารู้การกู้ซื้อบ้าน ตอบทุกข้อสงสัยเคลียร์ทุกขั้นตอนของการซื้อบ้าน setProfile'
      },
    }
  });
}

export function provideStore(store) {
  provide(StoreSymbol, store)
}

export default function useStore() {
  const store = inject(StoreSymbol)
  if (!store) {
    throw Error('no store provided')
  }
  return store
}
