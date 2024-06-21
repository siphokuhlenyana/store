<template lang="">
   <section></section>
    <div id="fetched">
        <div >
            <h2>{{$store.state.about}}</h2> 
        </div>
       <h1>Skills </h1>
       <div id="skills" v-for="skills in skillData() " :key="skills.name"> 
        <h2>{{skills.name}}</h2>
        
         </div>
       <h1>Education</h1>
        <div id="skills" v-for="education in educationData()" :key="education.placeOfInstitution">
            <h2>{{education.placeOfInstitution}}</h2>
            
        </div>
        <h1>2024 Projects</h1>
      <div id="skills" v-for="projects in projectData()" :key="projects.name">
        <h2>{{projects.name}}</h2>
    </div>  
    <h1>Work Experience</h1>
        <div id="skills" v-for="workExp in workExpData()" :key="workExp.placeOfWork">
            <h2>{{workExp.placeOfWork}}</h2
                ></div>
    </div>

</template>
<script>
export default {
    methods:{
 projectData(){
    
       return this.$store.state.projects  
    },
    skillData(){
    
     return this.$store.state.skills    
    },
    educationData()
     {
      return this.$store.state.education
     },
     projectsData()
     {
      return this.$store.state.projects 
     },
     workExpData()
     {
      return this.$store.state.workExp
     }
    
 },
    
    computed:{
        getAbout(){
           return this.$store.dispatch('getAbout')
        },
        getSkills(){
            return this.$store.dispatch('getSkills')
        },
        getEducation(){
            return this.$store.dispatch('getEducation')
        },
        getProjects(){
            return this.$store.dispatch('getProjects')
        },
        getWorkExperience(){
            return this.$store.dispatch('getWorkExperience')
        }
        // getEducation(){
        //     return this.$store.dispatch('')
        // }
    },
    mounted(){
        this.getAbout
        this.getSkills
        this.getEducation
        this.getProjects
        this.getWorkExperience
    }
}
</script>
<style scoped>
    #fetched{
        border: 2px crimson solid;
        border-radius: 30px;
        background-color: coral;
        width:500px;
        height:1500px;
        margin-left: 38%;
        padding: 25px;
        
    }
    h1{
        color: cornflowerblue;
      display: flex;
      justify-content:center
    }
    #skills{
        background-image: url('https://learn.g2.com/hubfs/G2CM_FI028_Learn_Article_Images-Hard_Skills_vs._Soft_Skills_Image1_V1a.png');

    }
    
</style>