function customeRender(reactelements, container) {
    /*
    const domElement = document.createElement(reactelements.type)
    domElement.innerHTML = reactelements.Children
    domElement.setAttribute('href', reactelements.props.href)
    domElement.setAttribute('target', reactelements.props.target)
    container.appendChild(domElement)
    */

    //    modulaer code
    const domElement = document.createElement(reactelements.type)
    domElement.innerHTML = reactelements.Children

    for (const prop in reactelements.props) {
        if (prop === 'Children') continue;
        domElement.setAttribute(prop, reactelements.props[prop])
    }

    container.appendChild(domElement)
}

const reactelements = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'click me to vist google'
}

const maincontainer = document.querySelector('#root')

customeRender(reactelements, maincontainer)