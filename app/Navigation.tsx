import { AppComponents } from '../pages/app'

interface Props {
  current: number
  prev: () => void
  next: () => void
  go: (to: AppComponents) => void
}

const Navigation: React.FC<Props> = ({ current, prev, next, go }) => {
  return (
    <div id="app-nav" className="app-nav">
      {/* For sticky positioning */}
      <div className="app-nav__content">
        <div className="app-nav__links">
          <button className="btn btn-secondary" onClick={() => go(AppComponents.Home)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentcolor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Home</span>
          </button>
          <button className="btn btn-secondary" onClick={() => go(AppComponents.Header)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Header</span>
          </button>
          <button className="btn btn-secondary" onClick={() => go(AppComponents.Content)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <span>Content</span>
          </button>
          <button className="btn btn-secondary" onClick={() => go(AppComponents.Design)}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentcolor">
              <path d="M22.624 1.455c-0.415-0.424-0.993-0.687-1.632-0.687-0.552 0-1.057 0.196-1.452 0.522l0.004-0.003-10.853 8.994c-0.080-0.004-0.16-0.006-0.24-0.006-0 0-0 0-0.001 0s-0 0-0.001-0h0c-0.002 0-0.005 0-0.008 0-2.358 0-4.359 1.529-5.065 3.649l-0.011 0.038-2.507 7.667c-0.039 0.117-0.062 0.251-0.062 0.391 0 0.694 0.562 1.258 1.256 1.26h0c0.141-0 0.276-0.023 0.403-0.066l-0.009 0.003 7.667-2.507c2.158-0.717 3.687-2.718 3.687-5.076 0-0.003 0-0.006 0-0.009v0c0-0.118-0.004-0.237-0.012-0.355l8.953-10.784c0.326-0.39 0.525-0.897 0.525-1.451 0-0.614-0.244-1.172-0.641-1.58l0.001 0.001zM9.646 19.282l-7.215 2.359 2.359-7.215c0.516-1.553 1.956-2.653 3.653-2.653 0.002 0 0.004 0 0.006 0h-0c0.106 0 0.214 0.004 0.321 0.013l3.516 3.516c0.009 0.107 0.013 0.214 0.013 0.321 0 0.002 0 0.004 0 0.006 0 1.697-1.1 3.137-2.626 3.645l-0.027 0.008zM21.586 3.526l-8.584 10.339-2.849-2.849 10.348-8.575c0.132-0.11 0.304-0.177 0.492-0.177 0.426 0 0.771 0.345 0.771 0.771 0 0.188-0.067 0.36-0.179 0.493l0.001-0.001z"></path>
            </svg>
            <span>Export</span>
          </button>
        </div>
        <div className="app-nav__next">
          <button disabled={current === AppComponents.Home} className="btn btn-secondary" onClick={() => prev()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="18" height="18">
              <path xmlns="http://www.w3.org/2000/svg" d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z" fill="currentColor"></path>
            </svg>
            <span>Prev</span>
          </button>
          <button disabled={current === AppComponents.Design} className="btn btn-primary" onClick={() => next()}>
            <span>Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="18" height="18">
              <path xmlns="http://www.w3.org/2000/svg" d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navigation
