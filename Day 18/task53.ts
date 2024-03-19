/*
Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
*/
interface profile {
    name: string,
    age: number,
    education: string,
    skills: {
        codingLangs: string[],
        technologies: string[]
    },
    projects: string[]
};

let myData: profile[] = [{
    name: 'Sarfaraz',
    age: 19,
    education: 'BS Computer Science',
    skills: {
        codingLangs: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        technologies: ['React', 'NextJS', 'Docker', 'Cloud Computing']
    },
    projects: ['Banking App', 'Ecommerce Website']
}]
console.log(myData.map((data)=> {
    console.log('Coding Langs: ' + data.skills.codingLangs.map((item) => console.log(item)))
    console.log('Technologies: ' + data.skills.technologies.map((item) => console.log(item)))
    console.log('Projects: ' + data.projects.map((item) => console.log(item)))
}));
