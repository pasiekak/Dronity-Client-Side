import './styles/style.css'

const YesOrNo = ({question, cancelFn, approveFn}) => {
    return (
        <div className='yes-or-no'>
            <h1 className={'question'}>{question}</h1>
            <div className={'buttons'}>
                <button className={'violet_button'} onClick={cancelFn}>Nie</button>
                <button className={'violet_button'} onClick={approveFn}>Tak</button>
            </div>
        </div>
    )
}

export default YesOrNo;