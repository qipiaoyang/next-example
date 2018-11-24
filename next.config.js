const withLess = require('@zeit/next-less');


if (typeof require !== 'undefined') {
    require.extensions['.less'] = (file) => {
    }
}

module.exports = withLess({
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
	//我们可以通过next的这个方法把全局的一些变量传到我们的代码里面
    publicRuntimeConfig: {
        NODE_ENV: process.env.NODE_ENV,
    }
})
