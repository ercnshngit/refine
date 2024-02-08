"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86556],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=h(a),u=s,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32562:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>h,toc:()=>p});a(67294);var n=a(3905);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const r={title:"git stash - Save the Uncommitted Changes Locally",description:"Explore the essential guide to Git Stash with practical examples and expert tips. Learn how to effectively save, manage, and apply your code changes with the git stash command.",authors:"muhammad_khabbab",tags:["git","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-02-git-stash/social.png",hide_table_of_contents:!1},l=void 0,h={permalink:"/blog/2024/01/26/git-stash",source:"@site/blog/2024-01-26-git-stash.md",title:"git stash - Save the Uncommitted Changes Locally",description:"Explore the essential guide to Git Stash with practical examples and expert tips. Learn how to effectively save, manage, and apply your code changes with the git stash command.",date:"2024-01-26T00:00:00.000Z",formattedDate:"January 26, 2024",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:12.005,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"git stash - Save the Uncommitted Changes Locally",description:"Explore the essential guide to Git Stash with practical examples and expert tips. Learn how to effectively save, manage, and apply your code changes with the git stash command.",authors:"muhammad_khabbab",tags:["git","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-02-git-stash/social.png",hide_table_of_contents:!1},prevItem:{title:"Kubernetes vs Docker - A Detailed Comparison",permalink:"/blog/kubernetes-vs-docker"},nextItem:{title:"An Intro to Server Components in React",permalink:"/blog/react-server-components"},relatedPosts:[{title:"Mojo - A New Programming Language for AI",description:"We'll go over the fundamentals of Mojo, a new programming language that aims to make AI programming more accessible.",permalink:"/blog/mojo-programming-language",formattedDate:"October 16, 2023",authors:[{name:"Haider Ali",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"haider_ali"}],readingTime:10.415,date:"2023-10-16T00:00:00.000Z"},{title:"How to use Zustand",description:"We'll learn how to use Zustand in our React project.",permalink:"/blog/zustand-react-state",formattedDate:"May 18, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:15.585,date:"2023-05-18T00:00:00.000Z"},{title:"Why you should prefer using pnpm over npm and yarn?",description:"The advantages of pnpm and comparison guide.",permalink:"/blog/pnpm-vs-npm-and-yarn",formattedDate:"October 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.805,date:"2022-10-13T00:00:00.000Z"}],authorPosts:[{title:"Zsh and Bash",description:"We'll explore the unique features of these tools and their similarities and differences.",permalink:"/blog/zsh-vs-bash",formattedDate:"July 14, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:15.65,date:"2023-07-14T00:00:00.000Z"},{title:"Kubernetes Image Pull Policy - A Detailed Guide",description:"Image pull policy in Kubernetes is a strategic decision that impacts applications' efficiency, reliability, and security.",permalink:"/blog/kubernetes-image-pull-policy",formattedDate:"January 3, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.045,date:"2024-01-03T00:00:00.000Z"},{title:"How to deploy Postgres on Kubernetes",description:"This article will serve as a guide for installing PostgreSQL on Kubernetes, covering pre-requisites such as setting up Kubectl, Kubernetes clusters, and Docker.",permalink:"/blog/postgres-on-kubernetes",formattedDate:"January 22, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.045,date:"2024-01-22T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[{value:"What is Git stash",id:"what-is-git-stash",level:2},{value:"Why do we need Git stash",id:"why-do-we-need-git-stash",level:2},{value:"How to switch between branches",id:"how-to-switch-between-branches",level:3},{value:"How to pull latest remote changes with Git Stash",id:"how-to-pull-latest-remote-changes-with-git-stash",level:3},{value:"How to use Git stash",id:"how-to-use-git-stash",level:2},{value:"Git stash vs commit",id:"git-stash-vs-commit",level:2},{value:"Git stash vs reset",id:"git-stash-vs-reset",level:2},{value:"Git stash vs stage",id:"git-stash-vs-stage",level:2},{value:"How to create a named Git stash",id:"how-to-create-a-named-git-stash",level:2},{value:"How to stash untracked files",id:"how-to-stash-untracked-files",level:2},{value:"How to create a new branch from Git stash",id:"how-to-create-a-new-branch-from-git-stash",level:2},{value:"How to use git stash list",id:"how-to-use-git-stash-list",level:2},{value:"How to use Git stash apply",id:"how-to-use-git-stash-apply",level:2},{value:"How to use Git stash pop",id:"how-to-use-git-stash-pop",level:2},{value:"Common Pitfalls and Troubleshooting guide for Git Stash",id:"common-pitfalls-and-troubleshooting-guide-for-git-stash",level:2},{value:"1. Understanding the scope of stash",id:"1-understanding-the-scope-of-stash",level:3},{value:"2. Stashed changes gone missing",id:"2-stashed-changes-gone-missing",level:3},{value:"3. Merge conflicts when applying a stash",id:"3-merge-conflicts-when-applying-a-stash",level:3},{value:"4. Accidentally dropping a stash",id:"4-accidentally-dropping-a-stash",level:3},{value:"5. Stashing untracked files",id:"5-stashing-untracked-files",level:3},{value:"6. Applying stash to a different branch",id:"6-applying-stash-to-a-different-branch",level:3},{value:"7. Cleaning up old stashes",id:"7-cleaning-up-old-stashes",level:3},{value:"Best Practices of using Git stash",id:"best-practices-of-using-git-stash",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function u(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){s(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"This article was last updated on January 26, 2024 to add more informations, diagram and commands for using git stash."))),(0,n.kt)("h2",{id:"what-is-git-stash"},"What is Git stash"),(0,n.kt)("p",null,"Stash is a Git command to locally store your recent changes in a separate area so you can fetch those changes later. After taking a snapshot of your local files, it resets the state of your workspace to the previous commit state. You can save multiple stashes on your local computer and you can apply back any of the stashes at a later stage."),(0,n.kt)("p",null,"Stash is very simple to use. You can run ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash")," to save your changes and then use ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash apply")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash pop")," to bring back those saved changes.",(0,n.kt)("br",{parentName:"p"}),"\n","Note that ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash")," is only applied to locally versioned files, and developers using the same git repository will not be aware of these stash changes."),(0,n.kt)("p",null,"In this article, we will cover Git stash in detail. We will start with why it is needed, how to use it, what are its best practices and some example commands of Git stash."),(0,n.kt)("p",null,"Steps we'll cover:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#what-is-git-stash"},"What is Git stash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#why-do-we-need-git-stash"},"Why do we need Git stash"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-switch-between-branches"},"How to switch between branches")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-pull-latest-remote-changes-with-git-stash"},"How to pull latest remote changes with Git Stash")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-use-git-stash"},"How to use Git stash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#git-stash-vs-commit"},"Git stash vs commit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#git-stash-vs-reset"},"Git stash vs reset")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#git-stash-vs-stage"},"Git stash vs stage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-create-a-named-git-stash"},"How to create a named Git stash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-stash-untracked-files"},"How to stash untracked files")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-create-a-new-branch-from-git-stash"},"How to create a new branch from Git stash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-use-git-stash-list"},"How to use git stash list")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-use-git-stash-apply"},"How to use Git stash apply")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-use-git-stash-pop"},"How to use Git stash pop")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#common-pitfalls-and-troubleshooting-guide-for-git-stash"},"Common Pitfalls and Troubleshooting guide for Git Stash"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#1-understanding-the-scope-of-stash"},"1. Understanding the scope of stash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#2-stashed-changes-gone-missing"},"2. Stashed changes gone missing")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#3-merge-conflicts-when-applying-a-stash"},"3. Merge conflicts when applying a stash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#4-accidentally-dropping-a-stash"},"4. Accidentally dropping a stash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#5-stashing-untracked-files"},"5. Stashing untracked files")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#6-applying-stash-to-a-different-branch"},"6. Applying stash to a different branch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#7-cleaning-up-old-stashes"},"7. Cleaning up old stashes")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#best-practices-of-using-git-stash"},"Best Practices of using Git stash"))),(0,n.kt)("h2",{id:"why-do-we-need-git-stash"},"Why do we need Git stash"),(0,n.kt)("p",null,"Some of the use cases where you will need Git stash are the following:"),(0,n.kt)("h3",{id:"how-to-switch-between-branches"},"How to switch between branches"),(0,n.kt)("p",null,"If you have two branches, let\u2019s say branch A and branch B. A lot of work has been added to both branches, and they have diverged from each other quite a lot. Both have different heads."),(0,n.kt)("p",null,"If you are working on branch A and you want to make some changes to branch B, then you will have no other choice except to create a commit at that point in branch A, then commit the code and push your changes so that you can fix the bug in branch B. After fixing the bug in branch B, you will switch your active branch to branch A and then run ",(0,n.kt)("inlineCode",{parentName:"p"},"git reset head\u2026")," to get your changes back."),(0,n.kt)("p",null,"This is not a very flexible approach because your unfinished work will be considered a checkpoint instead of a patch that is still a work in progress. This is where Git stash comes in. With Git stash, you can save your changes locally without making a commit, switch branches, perform other operations, and then reapply the locally stashed changes when you need them."),(0,n.kt)("p",null,"You can transition between different tasks without needing to undo or redo the changes."),(0,n.kt)("h3",{id:"how-to-pull-latest-remote-changes-with-git-stash"},"How to pull latest remote changes with Git Stash"),(0,n.kt)("p",null,"If more than one team member is working on the same code file and you want to fetch the changes made by other developers, then you will use ",(0,n.kt)("inlineCode",{parentName:"p"},"git pull")," which will merge other developers' changes into the file."),(0,n.kt)("p",null,"However, that will only happen if their changes do not conflict with yours. If the incoming modifications are on the same lines you have changed, then using ",(0,n.kt)("inlineCode",{parentName:"p"},"git pull")," will likely throw an error related to merging error. Git stash comes to the rescue here."),(0,n.kt)("p",null,"You can easily stash your local changes, pull the modifications made by other developers in the same file, and then you can apply your locally stashed changes to the same file. You might still have to resolve the conflicts manually, though."),(0,n.kt)("h2",{id:"how-to-use-git-stash"},"How to use Git stash"),(0,n.kt)("p",null,"Continuing the previous example of branch A and branch B, here is how you will use Git stash to switch between branches while saving your changes locally without making a commit."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Save changes to branch A which is your working branch."),(0,n.kt)("li",{parentName:"ol"},"Execute command ",(0,n.kt)("inlineCode",{parentName:"li"},"git stash"),". It will preserve your changes locally in the stack."),(0,n.kt)("li",{parentName:"ol"},"Check out branch B."),(0,n.kt)("li",{parentName:"ol"},"Fix the bug in branch B."),(0,n.kt)("li",{parentName:"ol"},"Commit the changes and if you want to push to remote, then do that as well."),(0,n.kt)("li",{parentName:"ol"},"Switch back to branch A using ",(0,n.kt)("inlineCode",{parentName:"li"},"checkout")," command"),(0,n.kt)("li",{parentName:"ol"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"git stash pop")," to retrieve your stashed changes back.")),(0,n.kt)("p",null,"Your changes preserved through ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash")," are saved in your project\u2019s .git directory, usually, the path is ",(0,n.kt)("inlineCode",{parentName:"p"},"/.git/refs/stash"),". It is the fastest way to get your working directory clean while still keeping the changes."),(0,n.kt)("h2",{id:"git-stash-vs-commit"},"Git stash vs commit"),(0,n.kt)("p",null,"Both ",(0,n.kt)("inlineCode",{parentName:"p"},"git commit")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash")," take a snapshot of changed files in the git working tree and save that snapshot for later use. However, both are very different from each other in many aspects, such as:"),(0,n.kt)("p",null,"\u2022 Commit is a part of the public git history so others can see it. Stash is always local.\n\u2022 The Stash command resets the files in the working tree to a previous commit point. A new commit leaves files in the working tree unmodified.\n\u2022 Commit creates a new save point on your branch, whereas stash reverts to a previous save point."),(0,n.kt)("h2",{id:"git-stash-vs-reset"},"Git stash vs reset"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"git reset")," command is similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash")," in the sense that both commands revert the files in the working directory to a previous commit. However, there are many differences, such as:"),(0,n.kt)("p",null,"\u2022 A hard reset will wipe out all the changes. A stash will save a snapshot of modified files on the local machine.\n\u2022 Stash does not create a new save point in the branch history because it is only to your local machine. A reset will create a new commit point in the branch history.\n\u2022 As the reset is based on the overall remote repository so you can use reset to jump back to any previous commit. A stash will only reset the files in your local workspace to a previous state."),(0,n.kt)("h2",{id:"git-stash-vs-stage"},"Git stash vs stage"),(0,n.kt)("p",null,"The command ",(0,n.kt)("inlineCode",{parentName:"p"},"git stage")," might appear to be the same as ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash")," because it also stages your changes; however, that is not the case. The ",(0,n.kt)("inlineCode",{parentName:"p"},"git stage")," is the step prior to the commit. You add new files to the \u201cstaged files\u201d so that the next commit contains these files. Stash will move your files back to the stack so that you can bring these files back and see the modifications."),(0,n.kt)("p",null,"Below illustration will help you understand how Git Stash works."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-02-git-stash/image2.png",alt:"Git Stash"})),(0,n.kt)("h2",{id:"how-to-create-a-named-git-stash"},"How to create a named Git stash"),(0,n.kt)("p",null,"Although it is not mandatory to name a stash, you can do that through ",(0,n.kt)("inlineCode",{parentName:"p"},'git stash push -m "stashName"')," followed by ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash apply stash^{/stashName}")," . You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash save stashName")," however, the ",(0,n.kt)("inlineCode",{parentName:"p"},"save")," command is deprecated. Note that a simple ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash")," would work perfectly fine as well."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ git stash push -m "MyStash1"\nSaved working directory and index state On BranchB: MyStash1\n')),(0,n.kt)("p",null,"By default, the ",(0,n.kt)("inlineCode",{parentName:"p"},"stash")," command stores uncommitted files and code while leaving any untracked or ignored files."),(0,n.kt)("h2",{id:"how-to-stash-untracked-files"},"How to stash untracked files"),(0,n.kt)("p",null,"If you want to stash all your untracked files in the stash stack, then execute the command ",(0,n.kt)("inlineCode",{parentName:"p"}," git stash --include-untracked")," or the short version ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash -u"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git stash --include-untracked\nSaved working directory and index state WIP on BranchB: 3d49c837 modify\n")),(0,n.kt)("h2",{id:"how-to-create-a-new-branch-from-git-stash"},"How to create a new branch from Git stash"),(0,n.kt)("p",null,"It is very easy to create a new branch from your latest stash. If you run ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash branch <branchName>"),", it will create a new branch from the latest stash. You can use the command ",(0,n.kt)("inlineCode",{parentName:"p"}," git stash branch <branch_name> stash@{revision}")," to generate a new branch from a specific stash."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ git stash branch branchfromstash\nSwitched to a new branch \'branchfromstash\'\nOn branch branchfromstash\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n        modified:   test.txt\n\nno changes added to commit (use "git add" and/or "git commit -a")\nDropped refs/stash@{0} (670a2fee6519bcb6a7bedcaf6ef64ac1be3dd9a7)\n')),(0,n.kt)("h2",{id:"how-to-use-git-stash-list"},"How to use git stash list"),(0,n.kt)("p",null,"To get an overview of all your stashed changes, use the git stash list command. This command will display each stash with its corresponding identifier and description. It is a quick way to review all the stashes you have created before deciding which one to apply or remove. Keep in mind that older stashes are pushed down the stack as new ones are created."),(0,n.kt)("p",null,"Just execute the command ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash list")," to see the list of current stashes."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git stash list\nstash@{0}: On BranchB: MyStash1\n")),(0,n.kt)("h2",{id:"how-to-use-git-stash-apply"},"How to use Git stash apply"),(0,n.kt)("p",null,"When you are ready to continue working on your stashed changes, ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash apply")," is the command you will use. This will reapply the last or specified stash onto your current working directory without removing it from the stash list. It is the safer option if you want to keep the stash for potential use later on another branch or if you are applying to a different context and need to ensure the changes are appropriate."),(0,n.kt)("p",null,"You can apply the git stash by running the command ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash apply stash^{/MyStash1}"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ git stash apply stash@{MyStash1}\nOn branch BranchB\nYour branch is up to date with \'origin/BranchB\'.\n\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n        modified:   test.txt\n\nno changes added to commit (use "git add" and/or "git commit -a")\n')),(0,n.kt)("h2",{id:"how-to-use-git-stash-pop"},"How to use Git stash pop"),(0,n.kt)("p",null,"The git stash pop command is used when you want to apply the most recent stashed changes and remove them from the stash list. This is ideal for when you are certain you no longer need the stashed state after reapplying it. This action can be irreversible, so ensure you are popping a stash you definitely won't need again, or that you are willing to resolve any conflicts that may arise on the spot."),(0,n.kt)("p",null,"Note that ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash pop")," removes the stash after applying it. ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash apply")," leaves it in the stash list for later use. The below example will remove the stash after applying it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ git stash pop\nOn branch branchfromstash\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n        modified:   test.txt\n\nno changes added to commit (use "git add" and/or "git commit -a")\nDropped refs/stash@{0} (37ae3e2690ecafd8c89466fd623ba9ac965dbd35)\n')),(0,n.kt)("h2",{id:"common-pitfalls-and-troubleshooting-guide-for-git-stash"},"Common Pitfalls and Troubleshooting guide for Git Stash"),(0,n.kt)("p",null,"Below we are presenting some common pitfalls of using Git Stash and how to handle them."),(0,n.kt)("h3",{id:"1-understanding-the-scope-of-stash"},"1. Understanding the scope of stash"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pitfall"),": Assuming stash saves global changes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tip"),": Remember that ",(0,n.kt)("inlineCode",{parentName:"li"},"git stash")," only stashes changes in the current working directory. If you are working in a multi-directory project, ensure you're in the correct directory when you stash or apply changes.")),(0,n.kt)("h3",{id:"2-stashed-changes-gone-missing"},"2. Stashed changes gone missing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pitfall"),": Losing track of stashed changes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tip"),": Use ",(0,n.kt)("inlineCode",{parentName:"li"},"git stash list")," to view all stashes. Each stash is indexed in a stack-like structure. Familiarize yourself with ",(0,n.kt)("inlineCode",{parentName:"li"},"git stash show")," to preview changes before applying them.")),(0,n.kt)("h3",{id:"3-merge-conflicts-when-applying-a-stash"},"3. Merge conflicts when applying a stash"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pitfall"),": Encountering merge conflicts when applying a stash."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tip"),": Conflicts can occur if the working directory or index have changed significantly since the stash was created. Use ",(0,n.kt)("inlineCode",{parentName:"li"},"git stash apply")," cautiously and be prepared to resolve conflicts manually. Consider working with branches for complex changes.")),(0,n.kt)("h3",{id:"4-accidentally-dropping-a-stash"},"4. Accidentally dropping a stash"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pitfall"),": Accidentally using ",(0,n.kt)("inlineCode",{parentName:"li"},"git stash drop")," and losing changes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tip"),": If you have dropped a stash accidentally, you might be able to recover it using ",(0,n.kt)("inlineCode",{parentName:"li"},"git fsck")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"git reflog"),". However, this is not guaranteed. Always double-check the stash index before dropping a stash.")),(0,n.kt)("h3",{id:"5-stashing-untracked-files"},"5. Stashing untracked files"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pitfall"),": Assuming ",(0,n.kt)("inlineCode",{parentName:"li"},"git stash")," saves new (untracked) files."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tip"),": By default, ",(0,n.kt)("inlineCode",{parentName:"li"},"git stash")," does not save untracked files. Use ",(0,n.kt)("inlineCode",{parentName:"li"},"git stash -u")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"git stash --include-untracked")," to stash untracked files. Remember to commit or stash your changes regularly to avoid losing work.")),(0,n.kt)("h3",{id:"6-applying-stash-to-a-different-branch"},"6. Applying stash to a different branch"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pitfall"),": Confusion about applying stashes across branches."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tip"),": Stashes are independent of branches and can be applied to any branch. However, this might lead to merge conflicts or unexpected behavior if the branches have diverged significantly. Always verify the target branch's status before applying a stash.")),(0,n.kt)("h3",{id:"7-cleaning-up-old-stashes"},"7. Cleaning up old stashes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pitfall"),": Accumulating too many old and irrelevant stashes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tip"),": Regularly review and clean up your stash list. Use ",(0,n.kt)("inlineCode",{parentName:"li"},"git stash drop <stash@{index}>")," to remove specific stashes or ",(0,n.kt)("inlineCode",{parentName:"li"},"git stash clear")," to remove all stashes. Be cautious with these commands, as removed stashes cannot be recovered.")),(0,n.kt)("h2",{id:"best-practices-of-using-git-stash"},"Best Practices of using Git stash"),(0,n.kt)("p",null,"Here are some of the best practices you should follow when using Git stash:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Git stash should be used only on a need basis; its scope is limited to local repository history. Any code part of the stash is not visible to other developers in your team."),(0,n.kt)("li",{parentName:"ul"},"Try to create temporary feature or development branches in your Git working tree and regularly commit to these branches instead of using stash."),(0,n.kt)("li",{parentName:"ul"},"Use stash only when you need the modified files temporarily stored on your machine for restoration later.")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Git stash is a convenient command by Git. If used in the right situations, it can be very beneficial. If you switch between your branches frequently and need to safely stage your latest work for a short time, Git stash is for you. Too much usage of the stash is also discouraged as well. If you follow the best practices mentioned above, Git stash will improve your efficiency and result in increased productivity."))}u.isMDXComponent=!0}}]);