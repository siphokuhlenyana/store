import { createStore } from 'vuex'

export default createStore({
  // variables  , always set the data to null because you do not know what datatype you are keeping 
  // data -> property , null -> value 
  state: {
    
   about:null,
   skills:null,
   workExperience:null,
   projects:null,
   education:null

  },
  getters: {
//     filterData(){
// return Array.filter()
//     }
  },
  mutations: {
    // Update the state 


    // setData(state,payload
    //   // state.data=payload
    // }

    // Commiting a mutation 

    setAboutMe(state ,hohoho){
      state.about=hohoho
    },
    setSkills(state ,hohoho){
      state.skills=hohoho
    },
    
    setWorkExperience(state ,hohoho){
      state.workExp  =hohoho
    },
    setProjects(state ,hohoho){
      state.projects=hohoho
    },
    setEducation(state ,hohoho){
      state.education=hohoho
    }
  },
  actions: {
    // Update the state , run all async code 
    // Despatching an action

//     fetchData({commit}){
// commit
//     }

    async getAbout(context){
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/firstAPI/data/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    context.commit('setAboutMe',converted.aboutMe)
    },
    async getSkills(context){
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/firstAPI/data/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    context.commit('setSkills',converted.skills)
    },
    async getEducation(context){
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/firstAPI/data/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    context.commit('setEducation',converted.education)
    },
    async getProjects(context){
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/firstAPI/data/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    context.commit('setProjects',converted.projects)
    },
    async getWorkExperience(context){
      let fetchedInfo= await fetch('https://siphokuhlenyana.github.io/firstAPI/data/data.json')
    let converted =await fetchedInfo.json()
    console.log(converted);
    context.commit('setWorkExperience',converted.workExp)
    }
  },
  modules: {

    // 
  }
})
