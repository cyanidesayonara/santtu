<template>
  <div id="app">
    <div>
      <header id="nav">
        <aside aria-label="Linkit">
          <a href="https://www.linkedin.com/in/santtu-nykanen/">LinkedIn</a>
          <span> | </span>
          <a href="https://github.com/cyanidesayonara">GitHub</a>
        </aside>
        <router-link to="/fi">FI</router-link>
        <span> | </span>
        <router-link to="/en">EN</router-link>
        <span> | </span>
        <router-link to="/blog">BLOG</router-link>
      </header>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: auto;
}

a {
  font-weight: bold;
  color: #2cb3ac;

  &.router-link-exact-active {
    color: #2c3e50;
  }
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  font-family: "Titillium Web", sans-serif;
  margin: 0;
}
header,
article,
footer {
  padding: 20px;
}
aside {
  float: right;
}
img {
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 20px;
  width: 40%;
  margin: 5px;
  float: right;
}
hr {
  margin: 0 -20px;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 10%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.1) 90%,
    rgba(0, 0, 0, 0) 100%
  );
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
