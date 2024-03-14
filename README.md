# react in other execution environment

## run

npm install
npm run build
 - cette commande est paramétré avec --watch , et va compiler a chaque enregistrement.

## settings better

scss : include in index.scss, and exclude in settings path `/**/includes_nocompil/**`
mimify in module sass compiler : `"format": "compressed"`

```JSON
{
    "workbench.colorTheme": "Tomorrow Night Blue",
    "cSpell.language": "en,fr",
    "window.zoomLevel": 1,
    "liveSassCompile.settings.useNewCompiler": true,
    "liveSassCompile.settings.formats": [

        {
            "format": "compressed",
            "extensionName": ".css",
            "savePath": null,
            "savePathReplacementPairs": null
        }
    ],
    "liveSassCompile.settings.excludeList": [
        "/**/node_modules/**",
        "/.vscode/**",
        "/**/includes_nocompil/**"
    ]
}
```

## dev

**SCSS**
ajouter les nouveaux fichiers scss dans `styles/includes_nocompil` puis ajouter `@import './includes_nocompil/newFile.scss';` dans `styles/index.scss`.

**Component**

pour ajouter un component, mettre uniquement la fonction dans le fichier component, et l'ajouter (au besoin) dans `components/index.jsx` ou dans `component/router.jsx` avec : 
```JS
import PageSecondComponent from "../components/page_second.jsx"
```

et dans le cas de `components/index.jsx` dans la fonction renderDom: 
```JS
ReactDOM.render(<MyComponent />, document.getElementById("app"));
```

ou dans router : 
```JS

    {
        id:1,
        hash: '#/secondPage',
        pointer: "#router",
        render: <PageSecondComponent />,
    },
```