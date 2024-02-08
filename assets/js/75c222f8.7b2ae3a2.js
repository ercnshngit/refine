"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99567],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(r),u=o,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>c});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}},l=void 0,d={unversionedId:"tutorial/adding-crud-pages/antd/add-create-page",id:"version-3.xx.xx/tutorial/adding-crud-pages/antd/add-create-page",title:"4. Adding Create Page",description:"Create page is the page where you can create the record. In this tutorial, we will create the create page for the blog_posts resource.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/antd/add-create-page.md",sourceDirName:"tutorial/4-adding-crud-pages/antd",slug:"/tutorial/adding-crud-pages/antd/add-create-page",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/antd/add-create-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/antd/add-create-page.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1707374200,formattedLastUpdatedAt:"Feb 8, 2024",frontMatter:{id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}}},s={},c=[{value:"Creating Create Page",id:"creating-create-page",level:2},{value:"Understanding the Create Component",id:"understanding-the-create-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Create Page to the App",id:"adding-the-create-page-to-the-app",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=m("Checklist"),g=m("ChecklistItem"),f={toc:c};function h(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Create page is the page where you can create the record. In this tutorial, we will create the create page for the ",(0,n.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource."),(0,n.kt)("h2",{id:"creating-create-page"},"Creating Create Page"),(0,n.kt)("p",null,"First, let's create our file under the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will name it ",(0,n.kt)("inlineCode",{parentName:"p"},"create.tsx"),". Then, we will copy the create page code generated by Inferencer and paste it into the file."),(0,n.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the ",(0,n.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'To open the create page, click the "Create" button in the top right corner of the table.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'On the create page, click on the "Show Code" button in the bottom right corner of the page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'You can see the create page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,n.kt)("inlineCode",{parentName:"p"},"create.tsx")," file."))),(0,n.kt)("p",null,"You can see the create page code generated by Inferencer below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  useNotificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={useNotificationProvider}\n      catchAll={<ErrorComponent />}\n      resources={[\n        {\n          name: "blog_posts",\n          list: AntdInferencer,\n          show: AntdInferencer,\n          create: AntdInferencer,\n          edit: AntdInferencer,\n        },\n      ]}\n    />\n  );\n};\n\nrender(<App />);\n')),(0,n.kt)("p",null,"Instead of coding the create page component from scratch, Inferencer've created the required code base on API response, so that we can customize."),(0,n.kt)("h2",{id:"understanding-the-create-component"},"Understanding the Create Component"),(0,n.kt)("p",null,"We will go through the create page components and hooks one by one."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<Create/>")," is a ",(0,n.kt)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing the title of the page, save button etc."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/components/basic-views/create"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"<Create/>")," documentation for more information ","\u2192"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<Form/>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<Form.Item/>")," are ",(0,n.kt)("strong",{parentName:"p"},"Ant Design")," components that are used to build the form."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://ant.design/components/form/"},"Refer to the ",(0,n.kt)("strong",{parentName:"a"},"Ant Design")," ",(0,n.kt)("inlineCode",{parentName:"a"},"<Form/>")," documentation for more information ","\u2192"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"useForm")," is a ",(0,n.kt)("strong",{parentName:"p"},"refine")," hook that provides the necessary props for the form. It also provides the ",(0,n.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," prop that we can pass to the submit button of the form."),(0,n.kt)("p",{parentName:"li"},"When you use ",(0,n.kt)("inlineCode",{parentName:"p"},"useForm")," in the create page, it sends the form data to ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," method when the form is submitted."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm/"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information ","\u2192")))),(0,n.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,n.kt)("p",null,"In the create page, we may need to select a record from another resource. For example, we may need to select a category from the ",(0,n.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the blog post to the category. In this case, we can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"useSelect")," hook provided by ",(0,n.kt)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the resource name to the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"getList")," method. Then, it returns the necessary props for the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Select/>")," component."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/field/useSelect/"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation for more information ","\u2192")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ant.design/components/select"},"Refer to the ",(0,n.kt)("strong",{parentName:"a"},"Ant Design")," ",(0,n.kt)("inlineCode",{parentName:"a"},"<Select/>")," documentation for more information ","\u2192")),(0,n.kt)("p",null,"In the auto-generated create page code, Inferencer used the ",(0,n.kt)("inlineCode",{parentName:"p"},"useSelect")," hook to select a category from the ",(0,n.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useSelect({\n  resource: "categories",\n});\n')),(0,n.kt)("h2",{id:"adding-the-create-page-to-the-app"},"Adding the Create Page to the App"),(0,n.kt)("p",null,"Now that we have created the create page, we need to add it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import the created ",(0,n.kt)("inlineCode",{parentName:"p"},"BlogPostCreate")," component.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"AntdInferencer")," component with the ",(0,n.kt)("inlineCode",{parentName:"p"},"BlogPostCreate")," component."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  useNotificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostshow } from "pages/blog-posts/show";\n//highlight-next-line\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={useNotificationProvider}\n      catchAll={<ErrorComponent />}\n      resources={[\n        {\n          name: "blog_posts",\n          list: BlogPostList,\n          edit: BlogPostEdit,\n          show: BlogPostShow,\n          //highlight-next-line\n          create: BlogPostCreate,\n        },\n      ]}\n    />\n  );\n};\nexport default App;\n')),(0,n.kt)("p",null,"Now, we can see the create page in the browser at ",(0,n.kt)("a",{href:"http://localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create")),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(u,{mdxType:"Checklist"},(0,n.kt)(g,{id:"add-create-page-antd",mdxType:"ChecklistItem"},"I added the create page to the app."),(0,n.kt)(g,{id:"add-create-page-antd-2",mdxType:"ChecklistItem"},"I understood the create page components and hooks."),(0,n.kt)(g,{id:"add-create-page-antd-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}h.isMDXComponent=!0}}]);