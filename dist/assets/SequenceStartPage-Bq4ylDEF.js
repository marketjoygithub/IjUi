import{r as m,j as e,u as b}from"./index-Fiv373v0.js";const y=()=>Math.random().toString(36).substr(2,9),p=({isOpen:s,onClose:l,isDarkMode:t,addSequence:h})=>{const[n,o]=m.useState(""),[d,c]=m.useState("Team can view and use"),[i,r]=m.useState("Normal Business Hours");if(!s)return null;const x=`fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50 ${t?"dark":""}`,g=`relative p-6 border w-full max-w-md shadow-lg rounded-md ${t?"bg-gray-800 text-white":"bg-white text-gray-800"}`,u=()=>{if(n.trim()){const a={id:y(),name:n,permissions:d,schedule:i};h(a),o(""),c("Team can view and use"),r("Normal Business Hours"),l()}};return e.jsx("div",{className:x,children:e.jsxs("div",{className:g,children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"New Sequence"}),e.jsx("button",{onClick:l,className:"text-gray-400 hover:text-gray-600 transition-colors",children:e.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsx("p",{className:`mb-4 ${t?"text-gray-300":"text-gray-600"}`,children:"Customize this sequence's name, permission settings, sending schedule, and more."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",htmlFor:"sequenceName",children:"Sequence Name"}),e.jsx("input",{type:"text",id:"sequenceName",value:n,onChange:a=>o(a.target.value),className:`w-full px-3 py-2 border rounded-md ${t?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-800"}`})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",htmlFor:"permissions",children:"Permissions"}),e.jsxs("select",{id:"permissions",value:d,onChange:a=>c(a.target.value),className:`w-full px-3 py-2 border rounded-md ${t?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-800"}`,children:[e.jsx("option",{children:"Team can view and use"}),e.jsx("option",{children:"Only I can view and use"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",htmlFor:"schedule",children:"Schedule"}),e.jsxs("select",{id:"schedule",value:i,onChange:a=>r(a.target.value),className:`w-full px-3 py-2 border rounded-md ${t?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-800"}`,children:[e.jsx("option",{children:"Normal Business Hours"}),e.jsx("option",{children:"Custom Schedule"})]}),e.jsxs("p",{className:`mt-2 text-sm ${t?"text-gray-400":"text-gray-600"}`,children:["You may edit or create new schedules ",e.jsx("a",{href:"#",className:"text-blue-500 hover:underline",children:"here"})]})]}),e.jsxs("div",{className:`p-3 rounded-md ${t?"bg-gray-700":"bg-gray-100"}`,children:[e.jsx("h4",{className:"font-medium mb-2",children:"Normal Business Hours"}),["Monday","Tuesday","Wednesday","Thursday","Friday"].map(a=>e.jsxs("p",{className:"text-sm",children:[e.jsxs("span",{className:"font-medium",children:[a,":"]})," 8 AM – 5 PM"]},a))]})]}),e.jsxs("div",{className:"flex justify-end space-x-2 mt-6",children:[e.jsx("button",{onClick:l,className:`px-4 py-2 rounded-md transition-colors ${t?"bg-gray-600 hover:bg-gray-700 text-white":"bg-gray-200 hover:bg-gray-300 text-gray-800"}`,children:"Back"}),e.jsx("button",{onClick:u,disabled:!n.trim(),className:`px-4 py-2 bg-blue-500 text-white rounded-md transition-colors ${n.trim()?"hover:bg-blue-600":"opacity-50 cursor-not-allowed"}`,children:"Create"})]})]})})},j=({isDarkMode:s,sequences:l,addSequence:t})=>{const[h,n]=m.useState(!1),o=b(),d=()=>n(!0),c=()=>n(!1),i=r=>{t(r),c(),o(`/sequences/main/${r.id}`)};return e.jsxs("div",{className:`container mx-auto px-4 py-8 ${s?"text-white":"text-gray-800"}`,children:[e.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Create your first sequence"}),e.jsx("p",{className:`${s?"text-gray-300":"text-gray-600"} mb-8`,children:"Build custom campaigns to automate emails, set more meetings, and convert more customers."}),e.jsxs("div",{className:"space-y-4 mb-8",children:[e.jsxs("button",{className:"flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",clipRule:"evenodd"})}),"Create a sequence with AI"]}),e.jsxs("button",{onClick:d,className:`flex items-center px-4 py-2 border rounded transition-colors ${s?"border-gray-600 text-white hover:bg-gray-700":"border-gray-300 text-gray-700 hover:bg-gray-100"}`,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"})}),"Create sequence"]})]}),l.length>0&&e.jsxs("div",{className:`mb-8 p-6 rounded-lg shadow-md ${s?"bg-gray-800":"bg-white"}`,children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Your Sequences"}),e.jsx("ul",{className:"space-y-2",children:l.map(r=>e.jsx("li",{className:`p-2 rounded cursor-pointer transition-colors ${s?"bg-gray-700 hover:bg-gray-600":"bg-gray-100 hover:bg-gray-200"}`,onClick:()=>o(`/sequences/main/${r.id}`),children:r.name},r.id))})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:`p-6 rounded-lg shadow-md ${s?"bg-gray-800":"bg-white"}`,children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Connect Salesloft or Outreach"}),e.jsx("p",{className:`${s?"text-gray-300":"text-gray-600"} mb-4`,children:"Already have Outreach or Salesloft? Integrate them with Apollo to seamlessly manage communications in one place."}),e.jsxs("div",{className:"space-x-4",children:[e.jsx("button",{className:`px-4 py-2 border rounded ${s?"border-gray-600 text-white hover:bg-gray-700":"border-gray-300 text-gray-700 hover:bg-gray-100"}`,children:"Connect Salesloft"}),e.jsx("button",{className:`px-4 py-2 border rounded ${s?"border-gray-600 text-white hover:bg-gray-700":"border-gray-300 text-gray-700 hover:bg-gray-100"}`,children:"Connect Outreach"})]})]}),e.jsxs("div",{className:`p-6 rounded-lg shadow-md ${s?"bg-gray-800":"bg-white"}`,children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Pre-built Templates"}),e.jsx("p",{className:`${s?"text-gray-300":"text-gray-600"} mb-4`,children:"You don't have to start from scratch! Use our pre-built sequences as a base, then customize to your heart's content."}),e.jsx("button",{className:`px-4 py-2 border rounded ${s?"border-gray-600 text-white hover:bg-gray-700":"border-gray-300 text-gray-700 hover:bg-gray-100"}`,children:"Create sequence"})]}),e.jsxs("div",{className:`p-6 rounded-lg shadow-md ${s?"bg-gray-800":"bg-white"}`,children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Guide to sequences"}),e.jsx("p",{className:`${s?"text-gray-300":"text-gray-600"} mb-4`,children:"Discover how sequences can help optimize and automate engagement with your contacts."}),e.jsx("button",{className:`px-4 py-2 border rounded ${s?"border-gray-600 text-white hover:bg-gray-700":"border-gray-300 text-gray-700 hover:bg-gray-100"}`,children:"Learn more"})]}),e.jsx("div",{className:`p-6 rounded-lg shadow-md ${s?"bg-gray-800":"bg-white"}`,children:e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"More sequence resources"})})]}),e.jsx(p,{isOpen:h,onClose:c,isDarkMode:s,addSequence:i})]})};export{j as default};
