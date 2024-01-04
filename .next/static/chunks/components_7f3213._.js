(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_7f3213._.js", {

"[project]/components/Tech.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Tech
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Tooltip.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function Tech(props) {
    const tech = props.tech;
    let imageSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg` && `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;
    function addDifferentImg(event) {
        event.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-plain.svg`;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: imageSrc && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "tech-icon-container",
            style: {
                animation: `fadeIn ${0.2 * props.index}s ease-in-out`
            },
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onError: addDifferentImg,
                    className: "tech-icon",
                    alt: `${tech}`,
                    "data-for": "toolTip",
                    "data-tip": tech,
                    src: imageSrc,
                    width: "50",
                    height: "50"
                }, void 0, false, {
                    fileName: "<[project]/components/Tech.js>",
                    lineNumber: 22,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/components/Tech.js>",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/Tech.js>",
            lineNumber: 16,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_c = Tech;
var _c;
__turbopack_refresh__.register(_c, "Tech");

})()),
"[project]/components/TechList.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>TechList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Tech$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Tech.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function TechList({ techArr }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                children: "Tools"
            }, void 0, false, {
                fileName: "<[project]/components/TechList.js>",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "tech-list",
                children: techArr.map((tech, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Tech$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        tech: tech,
                        index: index
                    }, `${index}-${tech}`, false, {
                        fileName: "<[project]/components/TechList.js>",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "<[project]/components/TechList.js>",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = TechList;
var _c;
__turbopack_refresh__.register(_c, "TechList");

})()),
"[project]/components/data.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "START_YEAR": ()=>START_YEAR,
    "projects": ()=>projects,
    "techArr": ()=>techArr
});
const projects = [
    {
        id: 1,
        title: "e-commerce react",
        description: "key technologies used [ReactJs,JSX, Context API,hooks, functional components and react-router-dom] ",
        source: "https://github.com/Didier187/e-commerce-react-app/tree/master/src",
        live: "https://picsum.netlify.app/"
    },
    {
        id: 2,
        title: "movie search app",
        description: "key technologies used [ReactJS,JSX,Functional component UseState, UseEffect, CSS, movie API]",
        source: "https://github.com/Didier187/MovieSearchApp",
        live: "https://nifty-morse-34a6e3.netlify.app/"
    },
    {
        id: 3,
        title: "movie rental API",
        description: "key technologies [nodejs, NPM, Javascript,JSON, HEROKU, Postman], api to manage movie rental with authentication and authorisation",
        source: "https://github.com/Didier187/vidly"
    },
    {
        id: 4,
        title: "Speed typing game",
        description: "Simple game to test how fast you can type in 30 seconds build with [ReactJs,Functional components,react hooks, custom hooks,CSS3 and Javascript",
        source: "https://github.com/Didier187/SpeedTypingGame",
        live: "https://unruffled-poitras-80d181.netlify.app/"
    },
    {
        id: 5,
        title: "password generator app",
        description: "A web app to generate stion passwords build with [Javascript, HTML5, CSS3",
        source: "https://github.com/Didier187/passwordGenApp",
        live: "https://didier187.github.io/passwordGenApp/"
    },
    {
        id: 6,
        title: "task manager API",
        description: "API to manage tasks, create task offers, accept offers and create task assignments key technologies [NPM, NodeJs, Javascript,JSON Postman]",
        source: "https://github.com/Didier187/ODD-JOBS-API"
    }
];
const techArr = [
    "typescript",
    "mongodb",
    "express",
    "react",
    "nextjs",
    "nodejs",
    "javascript",
    "html5",
    "css3",
    "sass",
    "bootstrap",
    "markdown",
    "heroku",
    "github",
    "vscode",
    "google",
    "firebase",
    "jest",
    "redux",
    "handlebars",
    "eslint",
    "graphql",
    "materialui",
    "nextjs",
    "storybook"
];
const START_YEAR = 2019;

})()),
"[project]/components/ContactMe.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ContactMe
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TechList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/TechList.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
function ContactMe() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
        className: "tab-content",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                children: "Contact me"
            }, void 0, false, {
                fileName: "<[project]/components/ContactMe.js>",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "contact",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "contact-info",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            children: "Are you looking for a skilled and passionate Frontend Engineer to join your team and help bring your ReactJS projects to life? Look no further! With my strong foundation in modern JavaScript frameworks and a track record of delivering high-quality work on time, I am ready to take on new challenges and contribute to the success of your organization. Contact me to learn more about how I can add value to your team"
                        }, void 0, false, {
                            fileName: "<[project]/components/ContactMe.js>",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "bold",
                                    children: "Email: "
                                }, void 0, false, {
                                    fileName: "<[project]/components/ContactMe.js>",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                    href: "mailto:kdondidier@gmail.com",
                                    children: "kdondidier@gmail.com"
                                }, void 0, false, {
                                    fileName: "<[project]/components/ContactMe.js>",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/ContactMe.js>",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/ContactMe.js>",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/ContactMe.js>",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TechList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                techArr: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["techArr"]
            }, void 0, false, {
                fileName: "<[project]/components/ContactMe.js>",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/ContactMe.js>",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = ContactMe;
var _c;
__turbopack_refresh__.register(_c, "ContactMe");

})()),
}]);

//# sourceMappingURL=components_7f3213._.js.map