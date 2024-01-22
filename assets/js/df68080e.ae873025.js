"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"adding-sort-and-filters",title:"6. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:!1}},s=void 0,p={unversionedId:"tutorial/adding-crud-pages/chakra-ui/adding-sort-and-filters",id:"version-3.xx.xx/tutorial/adding-crud-pages/chakra-ui/adding-sort-and-filters",title:"6. Adding Sort and Filters",description:"In the previous Adding List Page section, we have displayed blog posts data in a table. Now we will learn how to add sorting and filtering to the table to user can have more control over the data.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/chakra-ui/adding-sort-and-filters.md",sourceDirName:"tutorial/4-adding-crud-pages/chakra-ui",slug:"/tutorial/adding-crud-pages/chakra-ui/adding-sort-and-filters",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/chakra-ui/adding-sort-and-filters",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/chakra-ui/adding-sort-and-filters.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1705934593,formattedLastUpdatedAt:"Jan 22, 2024",frontMatter:{id:"adding-sort-and-filters",title:"6. Adding Sort and Filters",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature",next:!1}}},c={},d=[{value:"Sort and Filters",id:"sort-and-filters",level:2},{value:"Adding Sorting",id:"adding-sorting",level:2},{value:"Adding Filters",id:"adding-filters",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=u("Checklist"),h=u("ChecklistItem"),g={toc:d};function k(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the previous ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/adding-crud-pages/chakra-ui/index"},"Adding List Page")," section, we have displayed blog posts data in a table. Now we will learn how to add sorting and filtering to the table to user can have more control over the data."),(0,a.kt)("h2",{id:"sort-and-filters"},"Sort and Filters"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-table")," package based on the ",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/table/v8"},(0,a.kt)("strong",{parentName:"a"},"Tanstack Table"))," package. So, we can add sorting and filtering features to our table as suggested in the ",(0,a.kt)("strong",{parentName:"p"},"Tanstack Table")," documentation."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/react-table/"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"@pankod/refine-react-table")," ",(0,a.kt)("inlineCode",{parentName:"a"},"useTable")," documentation for more information ","\u2192")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tanstack Table")," keeps the ",(0,a.kt)("inlineCode",{parentName:"p"},"sorting")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"filters")," states in the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook. When we change the these states, the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook will automatically fetch the data and update the table with the new data."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Under the hood, ",(0,a.kt)("inlineCode",{parentName:"p"},"sorting"),"\xa0and ",(0,a.kt)("inlineCode",{parentName:"p"},"filters")," states of ",(0,a.kt)("strong",{parentName:"p"},"Tanstack Table")," are converted to the ",(0,a.kt)("inlineCode",{parentName:"p"},"CrudSorting")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CrudFilter")," types of ",(0,a.kt)("strong",{parentName:"p"},"refine"),". So, when you change the ",(0,a.kt)("strong",{parentName:"p"},"Tanstack Table"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"sorting")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"filters")," state, ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook will pass the converted params to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),".")),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-table")," provides a headless solution, there are many ways to handle filtering and sorting. In this tutorial, we will show basic examples of how to add sorting and filtering to the table."),(0,a.kt)("h2",{id:"adding-sorting"},"Adding Sorting"),(0,a.kt)("p",null,"Let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," component to use in our table header. This component will be responsible for changing the sorting state of the table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/table/ColumnSorter.tsx"',title:'"src/components/table/ColumnSorter.tsx"'},'import { IconButton } from "@chakra-ui/react";\nimport { IconChevronDown, IconSelector, IconChevronUp } from "@tabler/icons";\nimport type { Column } from "@pankod/refine-react-table";\n\nexport const ColumnSorter: React.FC<{ column: Column<any, any> }> = ({\n  column,\n}) => {\n  if (!column.getCanSort()) {\n    return null;\n  }\n\n  const sorted = column.getIsSorted();\n\n  return (\n    <IconButton\n      aria-label="Sort"\n      size="xs"\n      onClick={column.getToggleSortingHandler()}\n    >\n      {!sorted && <IconSelector size={18} />}\n      {sorted === "asc" && <IconChevronDown size={18} />}\n      {sorted === "desc" && <IconChevronUp size={18} />}\n    </IconButton>\n  );\n};\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," is a simple component that renders a button. When the user clicks on the button, the ",(0,a.kt)("inlineCode",{parentName:"p"},"column.getToggleSortingHandler()")," method will be called. This method will change the sorting state of the table."),(0,a.kt)("p",null,"In addition, we are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"column.getCanSort()")," method to check if the column is sortable. If the column is not sortable, we will not render the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," component."),(0,a.kt)("p",null,"Lastly, If the column is sorted, we will render the ",(0,a.kt)("inlineCode",{parentName:"p"},"IconChevronDown")," icon. Otherwise, we will render the ",(0,a.kt)("inlineCode",{parentName:"p"},"IconSelector")," icon."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In this example, we are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@tabler/icons")," package for icons. You can use any icon library you want.")),(0,a.kt)("br",null),(0,a.kt)("p",null,"Now, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," in our table header."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," component."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/blog-posts/list.tsx"',title:'"src/pages/blog-posts/list.tsx"'},'import { ColumnSorter } from "../../components/table/ColumnSorter";\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ColumnSorter/>")," component to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Th/>")," as a child like below."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/blog-posts/list.tsx"',title:'"src/pages/blog-posts/list.tsx"'},"<Thead>\n  {getHeaderGroups().map((headerGroup) => (\n    <Tr key={headerGroup.id}>\n      {headerGroup.headers.map((header) => (\n        <Th key={header.id}>\n          {!header.isPlaceholder &&\n            flexRender(header.column.columnDef.header, header.getContext())}\n          //highlight-next-line\n          <ColumnSorter column={header.column} />\n        </Th>\n      ))}\n    </Tr>\n  ))}\n</Thead>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Disable sorting for the ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," column by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"enableSorting")," property of the column to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in the column definition like below:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/blog-posts/list.tsx"',title:'"src/pages/blog-posts/list.tsx"'},'{\n    id: "actions",\n    accessorKey: "id",\n    header: "Actions",\n    //highlight-next-line\n    enableSorting: false,\n},\n')))),(0,a.kt)("p",null,"Now, we can sort the table by clicking on the sort button in the table header."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("strong",null,"How can I disable sorting for a specific column?")),(0,a.kt)("p",null,"You can disable sorting for a specific column by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"enableSorting")," property of the column to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in the column definition like below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "name",\n    accessorKey: "name",\n    header: "Name",\n    //highlight-next-line\n    enableSorting: false,\n},\n'))),(0,a.kt)("h2",{id:"adding-filters"},"Adding Filters"),(0,a.kt)("p",null,"Let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," component to use in our table header. This component will be responsible for changing the filters state of the table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/table/ColumnFilter.tsx"',title:'"src/components/table/ColumnFilter.tsx"'},'import React, { useState } from "react";\nimport {\n  Input,\n  Menu,\n  IconButton,\n  MenuButton,\n  MenuList,\n  VStack,\n  HStack,\n} from "@pankod/refine-chakra-ui";\nimport { IconFilter, IconX, IconCheck } from "@tabler/icons";\nimport type { Column } from "@pankod/refine-react-table";\n\nexport const ColumnFilter: React.FC<{ column: Column<any, any> }> = ({\n  column,\n}) => {\n  const [state, setState] = useState(null as null | { value: any });\n\n  if (!column.getCanFilter()) {\n    return null;\n  }\n\n  const open = () =>\n    setState({\n      value: column.getFilterValue(),\n    });\n\n  const close = () => setState(null);\n\n  const change = (value: any) => setState({ value });\n\n  const clear = () => {\n    column.setFilterValue(undefined);\n    close();\n  };\n\n  const save = () => {\n    if (!state) return;\n    column.setFilterValue(state.value);\n    close();\n  };\n\n  const renderFilterElement = () => {\n    const FilterComponent = (column.columnDef?.meta as any)?.filterElement;\n\n    if (!FilterComponent && !!state) {\n      return (\n        <Input\n          borderRadius="md"\n          size="sm"\n          autoComplete="off"\n          value={state.value}\n          onChange={(e) => change(e.target.value)}\n        />\n      );\n    }\n\n    return (\n      <FilterComponent\n        value={state?.value}\n        onChange={(e: any) => change(e.target.value)}\n      />\n    );\n  };\n\n  return (\n    <Menu isOpen={!!state} onClose={close}>\n      <MenuButton\n        onClick={open}\n        as={IconButton}\n        aria-label="Options"\n        icon={<IconFilter size="16" />}\n        variant="ghost"\n        size="xs"\n      />\n      <MenuList p="2">\n        {!!state && (\n          <VStack align="flex-start">\n            {renderFilterElement()}\n            <HStack spacing="1">\n              <IconButton\n                aria-label="Clear"\n                size="sm"\n                colorScheme="red"\n                onClick={clear}\n              >\n                <IconX size={18} />\n              </IconButton>\n              <IconButton\n                aria-label="Save"\n                size="sm"\n                onClick={save}\n                colorScheme="green"\n              >\n                <IconCheck size={18} />\n              </IconButton>\n            </HStack>\n          </VStack>\n        )}\n      </MenuList>\n    </Menu>\n  );\n};\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," is a component that renders a button. When the user clicks on the button, the menu will be opened. In the menu, we are rendering the filter element of the column. By default, we are rendering an ",(0,a.kt)("inlineCode",{parentName:"p"},"<Input/>")," component. However, you can render any component you want."),(0,a.kt)("p",null,"Filter element is a component that renders an input element. When the user changes the value of the input element, the filter value of the column will be changed."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," also contains a clear and apply button. When the user clicks on the clear button, the filter value of the column will be cleared. When the user clicks on the apply button, the filter value of the column will be set."),(0,a.kt)("p",null,"Now, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," in our table header."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," component."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/blog-posts/list.tsx"',title:'"src/pages/blog-posts/list.tsx"'},'import { ColumnFilter } from "../../components/table/ColumnFilter";\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ColumnFilter/>")," component to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Th/>")," as a child like below."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/blog-posts/list.tsx"',title:'"src/pages/blog-posts/list.tsx"'},"<Thead>\n  {getHeaderGroups().map((headerGroup) => (\n    <Tr key={headerGroup.id}>\n      {headerGroup.headers.map((header) => (\n        <Th key={header.id}>\n          {!header.isPlaceholder &&\n            flexRender(header.column.columnDef.header, header.getContext())}\n          <ColumnSorter column={header.column} />\n          //highlight-next-line\n          <ColumnFilter column={header.column} />\n        </Th>\n      ))}\n    </Tr>\n  ))}\n</Thead>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Change the filter operator for columns to "contains" by changing the ',(0,a.kt)("inlineCode",{parentName:"p"},"meta")," property of the column definition like below:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "title",\n    accessorKey: "title",\n    header: "Title",\n    //highlight-start\n    meta: {\n        filterOperator: "contains",\n    },\n    //highlight-end\n},\n{\n    id: "content",\n    accessorKey: "content",\n    header: "Content",\n    //highlight-start\n    meta: {\n        filterOperator: "contains",\n    },\n    //highlight-end\n},\n')),(0,a.kt)("p",{parentName:"li"},"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"filterOperator"),' is set to "eq". So, we have changed the ',(0,a.kt)("inlineCode",{parentName:"p"},"filterOperator"),' to "contains" for specific columns.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Disable filtering for the "actions" column by setting the ',(0,a.kt)("inlineCode",{parentName:"p"},"enableColumnFilter")," property of the column to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in the column definition like below:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "actions",\n    accessorKey: "id",\n    header: "Actions",\n    //highlight-next-line\n    enableColumnFilter: false,\n    ...\n},\n')))),(0,a.kt)("p",null,"Now, we can filter the table by clicking on the filter button in the table header."),(0,a.kt)("br",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("strong",null,"How can I use custom filter element?")),(0,a.kt)("p",null,"If you want to use a custom filter element, you can pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"filterElement")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," in column definition. For example, you can pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Select/>")," component like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "category",\n    header: "Category",\n    accessorKey: "category.id",\n    meta: {\n        filterElement: (props) => <Select {...props} />,\n    },\n},\n')),(0,a.kt)("p",null,"In the props, the filter element will receive the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," props. You can use these props to change the filter value of the column.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("strong",null,"How can I change the filter operator?")),(0,a.kt)("p",null,'By default, filter operator is "eq" for columns. You can change the filter operator by passing the ',(0,a.kt)("inlineCode",{parentName:"p"},"filterOperator")," property to the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta"),' in column definition. For example, you can change the filter operator to "contains" like below:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "description",\n    header: "Description",\n    accessorKey: "description",\n    //highlight-start\n    meta: {\n        filterOperator: "contains",\n    },\n    //highlight-end\n},\n'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("strong",null,"How can I disable filtering for a specific column?")),(0,a.kt)("p",null,"You can disable filtering for a specific column by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"enableColumnFilter")," property of the column to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in the column definition like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "category",\n    header: "Category",\n    accessorKey: "category.id",\n    //highlight-next-line\n    enableColumnFilter: false,\n},\n'))),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(m,{mdxType:"Checklist"},(0,a.kt)(h,{id:"add-search-and-filters-chakra-ui",mdxType:"ChecklistItem"},"I added search and filters to the table.")))}k.isMDXComponent=!0}}]);