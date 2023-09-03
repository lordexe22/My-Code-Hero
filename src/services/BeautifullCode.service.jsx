import '../styles/BeautifullCode.style.css'

export default function BeautifullCode({ code, theme }){
    return ( <div className='pre-container'><pre className={theme}><code>{code}</code></pre></div>);
}