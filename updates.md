### Additions

1. ***Async Reducer & Epic loading*** - This will inject the reducer and epics only when required. Where will you call ? Component itself. Custom hook for dynamic reducer is added  😈

2. ***Redux Sauce*** - No need for manually typing in strings and create own actions and reducers. None! It does that for us

3. ***React Router 4*** -  Config & one component to handle nested child routes

    ```
        <Switch>
            {routes.map((route, idx) => <RouteWithSubRoutes key={idx} {...route} />)}
        </Switch>
    ```

    and your routes will look like this

    ```

        {
            path: '/dplist',
            component: AsyncDPList,
            exact: true,
            routes: [
                {
                        path: '/dplist',
                        component: AsyncDPList,
                }
            ]
        },

    ```

    This is it!  Keep doing the same `routes.map` in case the route has a child.



4. ***i18n Setup and core component*** - Ported from React boilerplate and usage will be same.
    Along with this I was able to use Immutable versions of functions. you guys might be already familiar with it. 

5. ***Connected React Router Setup***  - Dump all your local router history to Redux store

6. ***HighChart*** - base component and hooks for filters. This was in my sprint tasks. In case anything comes up for charting Component is there. 
    It re-renders the chart component based on filters and custom hooks are added for same in SalesPerformance section

7. ***Storybook*** setup and examples - You will find this throught the folders of `views` and `components`

8. ***Testing*** - You will find this throught the folders of `views` and `components` 

    A note through - Jest doesn't supports hooks as of now. So rendering any component using hooks inside your test case will not work.
    Alternative is ReactShallowRenderer which is presumably to be released in next week ( It's merged already in their stack). This comes directly from Dan Abramov

    Hopefully, we can wait for Jest to release the same for shallow testing.

9. ***Material Design*** - There is a setup for theme and Overrides. Lot of components to look actions

10. ***Styled components*** - For all the custom components, styled components is in place. 


### Other important things 


11. I  also added a *splitChunks configuration* into webpack, which has been a major driving factor to decide on our build individual vendor packages ( Yes each of them ). 
    Running `yarn run build` with this being un-commnented will give you a breakdown of vendor bundle as well along with other chunks.
    Not only that it will give you the memory difference of each npm right next to it added or removed. This particular addition is by CRA


12. ***Delta from React boilerplate*** is  Offline and SEO support. Nothing more! Which are already in my immediate pipeline of tasks. By the time you will start contributing towards project it will be ready for you


13. ***Precommit and Pre-push hooks*** before you do anything. More scripts can be added as per project requirement. Run linters, auto-fix them, check builds etc


### Reading material


1. Redux observables - https://redux-observable.js.org/
2. RxJs - https://www.learnrxjs.io/
3. Jest - https://jestjs.io/docs/en/getting-started
4. Writing Stories - https://storybook.js.org/basics/writing-stories/
5. Typescript - https://www.typescriptlang.org/ 
6. Finding Trouble to understand the wrapping around JS? Use playground to compile TS/TSX to JS - https://www.typescriptlang.org/play/index.html
7. Where to search package types - http://definitelytyped.org
8. React Hooks - https://reactjs.org/docs/hooks-intro.html
9. Dynamic imports Webpack - https://webpack.js.org/guides/code-splitting/#dynamic-imports