import React from 'react'
import css from '../HomePage/HomePage.module.css'
import workProgres1 from '../images/workingProcessIm/Group1.svg'
import workProgres2 from '../images/workingProcessIm/workingProcessImg2.svg.svg'
import workProgres3 from '../images/workingProcessIm/workingProcessImg3.svg.svg'
import workProgres4 from '../images/workingProcessIm/workingProcessImg4.svg.svg'
const WorkingProgress = () => {
    return (
        <>
            <div className={css.workProgres}>
                <div className={css.stepContainer} >
                    <span className={css.lineWorkProgress}></span>
                    <h2 className={css.stepsText}> STEPS</h2>
                </div>
                <h1 className={css.titleWorkProgress}>Working Process</h1>

                <div className={css.workProgressList}>
                    <ul className={css.workProgresItem}>
                        <li className={css.liImgWorkProgress}><img src={workProgres1} alt='workProgres' className={css.workProgresImg} />
                        </li>
                        <h3 className={css.textWorkProgress}>Planning Stage</h3>
                        <p className={css.textWorkProgress}>Aenean commodo nec ligula eget cum sociis dolor.</p>
                    </ul>
                    <ul className={css.workProgresItem}>
                        <li className={css.liImgWorkProgress}>
                            <img src={workProgres2} alt='workProgres' className={css.workProgresImg} />
                        </li>
                        <h3 className={css.textWorkProgress}>Design Process</h3>
                        <p className={css.textWorkProgress}>Aenean commodo nec ligula eget cum sociis dolor.</p>
                    </ul>
                    <ul className={css.workProgresItem}>
                        <li className={css.liImgWorkProgress}>
                            <img src={workProgres3} alt='workProgres' className={css.workProgresImg} /></li>
                        <h3 className={css.textWorkProgress}>Execution Phase</h3>
                        <p className={css.textWorkProgress}>Aenean commodo nec ligula eget cum sociis dolor.</p>
                    </ul>
                    <ul className={css.workProgresItem}>
                        <li className={css.liImgWorkProgress}>
                            <img src={workProgres4} alt='workProgres' className={css.workProgresImg} />
                        </li>
                        <h3 className={css.textWorkProgress}>Completed Projects</h3>
                        <p className={css.textWorkProgress}>Aenean commodo nec ligula eget cum sociis dolor.</p>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default WorkingProgress
