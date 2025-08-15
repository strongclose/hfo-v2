import * as React from 'react';

export function Navigation(): JSX.Element {
  return React.createElement('nav', {
    className: "fixed top-0 left-0 right-0 z-50 px-8 py-3 backdrop-blur-md transition-all duration-500 border-b border-gray-200/20 bg-white/80"
  },
    React.createElement('div', {
      className: "max-w-7xl mx-auto relative"
    },
      React.createElement('button', {
        onClick: () => window.location.href = '/',
        className: "absolute left-0 top-0 flex items-center space-x-3 hover:opacity-80 transition-opacity"
      },
        React.createElement('div', {
          className: "relative"
        },
          React.createElement('svg', {
            className: "w-10 h-10 transition-all",
            fill: "#1E40AF",
            stroke: "white",
            strokeWidth: "1",
            viewBox: "0 0 24 24"
          },
            React.createElement('path', {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            })
          ),
          React.createElement('div', {
            className: "absolute inset-0 flex items-center justify-center"
          },
            React.createElement('svg', {
              className: "w-5 h-5 text-white",
              stroke: "currentColor",
              strokeWidth: "2.5",
              fill: "none",
              viewBox: "0 0 24 24"
            },
              React.createElement('circle', {
                cx: "11",
                cy: "11",
                r: "8"
              }),
              React.createElement('path', {
                d: "m21 21-4.35-4.35"
              })
            )
          )
        ),
        React.createElement('span', {
          className: "text-xl font-bold transition-colors text-gray-900"
        },
          React.createElement('span', {
            className: "text-teal-400"
          }, "Health"),
          React.createElement('span', {
            className: "text-gray-900"
          }, "Fees"),
          React.createElement('span', {
            className: "text-teal-400"
          }, ".org")
        )
      ),
      React.createElement('div', {
        className: "hidden md:flex items-center justify-center space-x-2"
      },
        React.createElement('a', {
          href: "/compare-prices",
          className: "px-6 py-3 font-medium transition-all duration-300 text-base rounded-full hover:scale-105 inline-block text-gray-600 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25"
        }, "Compare Prices"),
        React.createElement('a', {
          href: "/directories",
          className: "px-6 py-3 font-medium transition-all duration-300 text-base rounded-full hover:scale-105 inline-block text-gray-600 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25"
        }, "Directories"),
        React.createElement('a', {
          href: "/transparency",
          className: "px-6 py-3 font-medium transition-all duration-300 text-base rounded-full hover:scale-105 inline-block text-gray-600 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25"
        }, "Transparency"),
        React.createElement('a', {
          href: "/insights",
          className: "px-6 py-3 font-medium transition-all duration-300 text-base rounded-full hover:scale-105 inline-block text-gray-600 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25"
        }, "Insights"),
        React.createElement('a', {
          href: "/who-we-help",
          className: "px-6 py-3 font-medium transition-all duration-300 text-base rounded-full hover:scale-105 inline-block text-gray-600 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25"
        }, "Who We Help")
      ),
      React.createElement('button', {
        onClick: () => {
          const menu = document.getElementById('mobile-menu');
          if (menu) {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
          }
        },
        className: "absolute right-0 top-0 md:hidden transition-colors text-gray-900 hover:text-teal-600"
      },
        React.createElement('svg', {
          className: "w-6 h-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        },
          React.createElement('path', {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 6h16M4 12h16M4 18h16"
          })
        )
      ),
      React.createElement('div', {
        id: "mobile-menu",
        className: "md:hidden mt-16 border rounded-lg backdrop-blur-md border-gray-200/20 bg-white/90",
        style: { display: 'none' }
      },
        React.createElement('div', {
          className: "px-6 py-4 space-y-3"
        },
          React.createElement('a', {
            href: "/compare-prices",
            className: "block w-full text-left font-medium py-2 text-gray-900"
          }, "Compare Prices"),
          React.createElement('a', {
            href: "/directories",
            className: "block w-full text-left font-medium py-2 text-gray-900"
          }, "Directories"),
          React.createElement('a', {
            href: "/transparency",
            className: "block w-full text-left font-medium py-2 text-gray-900"
          }, "Transparency"),
          React.createElement('a', {
            href: "/insights",
            className: "block w-full text-left font-medium py-2 text-gray-900"
          }, "Insights"),
          React.createElement('a', {
            href: "/who-we-help",
            className: "block w-full text-left font-medium py-2 text-gray-900"
          }, "Who We Help")
        )
      )
    )
  );
}

export default Navigation;
