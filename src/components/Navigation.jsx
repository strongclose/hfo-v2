import React from "react";
import { Shield, Search, Menu, X } from "lucide-react";

const Navigation = () => {
  const [state, setState] = React.useState({
    isMobileMenuOpen: false,
    isHomepage: false,
    isScrolled: true,
    isVisible: true,
    lastScrollY: 0
  });

  React.useEffect(() => {
    const checkHomepage = () => {
      setState(prev => ({
        ...prev,
        isHomepage: window.location.pathname === "/"
      }));
    };

    checkHomepage();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (state.isHomepage) {
        const heroHeight = window.innerHeight;
        const whyMattersStart = heroHeight;
        const whoUsesStart = whyMattersStart + 800;
        const dataShowsStart = whoUsesStart + 800;

        if (currentScrollY < whyMattersStart) {
          setState(prev => ({ ...prev, isScrolled: false }));
        } else if (
          currentScrollY >= whyMattersStart &&
          currentScrollY < whoUsesStart
        ) {
          setState(prev => ({ ...prev, isScrolled: true }));
        } else if (
          currentScrollY >= whoUsesStart &&
          currentScrollY < dataShowsStart
        ) {
          setState(prev => ({ ...prev, isScrolled: false }));
        } else {
          setState(prev => ({ ...prev, isScrolled: true }));
        }
      } else {
        setState(prev => ({ ...prev, isScrolled: true }));
      }

      if (currentScrollY > 100) {
        if (currentScrollY > state.lastScrollY && currentScrollY > 300) {
          setState(prev => ({ ...prev, isVisible: false }));
        } else if (currentScrollY < state.lastScrollY) {
          setState(prev => ({ ...prev, isVisible: true }));
        }
      } else {
        setState(prev => ({ ...prev, isVisible: true }));
      }

      setState(prev => ({ ...prev, lastScrollY: currentScrollY }));
    };

    setTimeout(() => handleScroll(), 0);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", checkHomepage);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", checkHomepage);
    };
  }, [state.isHomepage, state.lastScrollY]);

  const navigation = [
    {
      name: "Compare Prices",
      href: "/compare-prices",
    },
    {
      name: "Insights",
      href: "/insights",
    },
    {
      name: "Who We Help",
      href: "/who-we-help",
    },
  ];

  return React.createElement(
    'nav',
    {
      className: `fixed top-0 left-0 right-0 z-50 px-8 py-3 backdrop-blur-md transition-all duration-500 border-b ${
        state.isScrolled ? "border-gray-200/20 bg-white/80" : "border-white/10 bg-white/5"
      }`,
      style: {
        transform: state.isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease",
      }
    },
    React.createElement(
      'div',
      { className: "max-w-7xl mx-auto relative" },
      React.createElement(
        'button',
        {
          onClick: () => (window.location.href = "/"),
          className: "absolute left-0 top-0 flex items-center space-x-3 hover:opacity-80 transition-opacity"
        },
        React.createElement(
          'div',
          { className: "relative" },
          React.createElement(Shield, {
            className: "w-10 h-10 transition-all",
            fill: state.isScrolled ? "#1E40AF" : "url(#heroGradient)",
            stroke: "white",
            strokeWidth: 1
          }),
          React.createElement(
            'svg',
            { width: "0", height: "0" },
            React.createElement(
              'defs',
              null,
              React.createElement(
                'linearGradient',
                {
                  id: "heroGradient",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "100%"
                },
                React.createElement('stop', { offset: "0%", stopColor: "#1E3A8A" }),
                React.createElement('stop', { offset: "50%", stopColor: "#1E40AF" }),
                React.createElement('stop', { offset: "100%", stopColor: "#2563EB" })
              )
            )
          ),
          React.createElement(
            'div',
            { className: "absolute inset-0 flex items-center justify-center" },
            React.createElement(Search, { className: "w-5 h-5 text-white", strokeWidth: 2.5 })
          )
        ),
        React.createElement(
          'span',
          {
            className: `text-xl font-bold transition-colors ${state.isScrolled ? "text-gray-900" : "text-white"}`
          },
          React.createElement('span', { className: "text-teal-400" }, "Health"),
          React.createElement('span', { className: state.isScrolled ? "text-gray-900" : "text-white" }, "Fees"),
          React.createElement('span', { className: "text-teal-400" }, ".org")
        )
      ),
      React.createElement(
        'div',
        { className: "hidden md:flex items-center justify-center space-x-2" },
        navigation.map((item) =>
          React.createElement(
            'a',
            {
              key: item.name,
              href: item.href,
              className: `px-6 py-3 font-medium transition-all duration-300 text-base rounded-full hover:scale-105 inline-block ${
                state.isScrolled
                  ? "text-gray-600 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25"
                  : "text-white hover:text-white hover:bg-white/20 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-white/10"
              }`
            },
            item.name
          )
        )
      ),
      React.createElement(
        'button',
        {
          onClick: () => setState(prev => ({ ...prev, isMobileMenuOpen: !prev.isMobileMenuOpen })),
          className: `absolute right-0 top-0 md:hidden transition-colors ${
            state.isScrolled
              ? "text-gray-900 hover:text-teal-600"
              : "text-white hover:text-teal-400"
          }`
        },
        state.isMobileMenuOpen
          ? React.createElement(X, { className: "w-6 h-6" })
          : React.createElement(Menu, { className: "w-6 h-6" })
      ),
      state.isMobileMenuOpen &&
        React.createElement(
          'div',
          {
            className: `md:hidden mt-16 border rounded-lg backdrop-blur-md ${
              state.isScrolled
                ? "border-gray-200/20 bg-white/90"
                : "border-white/10 bg-white/5"
            }`
          },
          React.createElement(
            'div',
            { className: "px-6 py-4 space-y-3" },
            navigation.map((item) =>
              React.createElement(
                'a',
                {
                  key: item.name,
                  href: item.href,
                  className: `block w-full text-left font-medium py-2 ${
                    state.isScrolled ? "text-gray-900" : "text-white"
                  }`,
                  onClick: () => setState(prev => ({ ...prev, isMobileMenuOpen: false }))
                },
                item.name
              )
            )
          )
        )
    )
  );
};

export { Navigation };
