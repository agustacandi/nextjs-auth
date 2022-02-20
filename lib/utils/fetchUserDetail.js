const userAccessToken = () => {
    const accessToken = localStorage.getItem('accessToken') !== "undefined" ? JSON.parse(localStorage.getItem('accessToken')) : localStorage.clear();
    return accessToken; 
}

const userProviderData = () => {
    const userData = localStorage.getItem('user') !== "undefined" ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    return userData; 
}

export {userAccessToken, userProviderData}