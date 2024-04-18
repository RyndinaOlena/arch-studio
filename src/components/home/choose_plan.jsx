
import css from '../home/HomePage.module.css'
const ChoosePlan = () => {
    return (
        <div className={css.container}>
            <div className={css.choosePlanContainer} >
                <div className={css.textChoosePlan}> <span className={css.lineTeam}></span><h3 className={css.chooseTeamText}>PRICING PLAN</h3>
                    <h2 className={css.ChoosePlanTitle}>Choose Your Perfect Plan</h2></div>
                <div className={css.blockChoosePlan}>
                    <div className={css.blockListChoosePlan}>
                        <h3 className={css.titleBlockChoosePlan}>Basic<strong className={css.pricingChoosePlan}>Free</strong></h3>
                        <ul className={css.listChoosePlan}>

                            <li className={css.pricingListChoosePlan}>Standard listing submission, active for
                                30 days. </li>
                            <li className={css.pricingListChoosePlan}>Web Optimized</li>
                            <li className={css.pricingListChoosePlan}>Free Server Domain</li>
                            <li className={css.pricingListChoosePlan}>Mobile Optimized</li>
                            <li className={css.pricingListChoosePlan}>Outstanding Support</li>
                        </ul>
                        <button className={css.btnChooseplan}><p className={css.btnChoosePlanText}>CHOOSE PLAN</p></button>
                    </div>
                    <div className={css.blockListChoosePlan}>
                        <div className={css.popularLibel}>MOST POPULAR</div><h3 className={css.titleBlockChoosePlanSecond}>Professional<strong className={css.pricingChoosePlan}>$599.95</strong></h3>
                        <ul className={css.listChoosePlan}>

                            <li className={css.pricingListChoosePlan}>Standard listing submission, active for
                                30 days. </li>
                            <li className={css.pricingListChoosePlan}>Web Optimized</li>
                            <li className={css.pricingListChoosePlan}>Free Server Domain</li>
                            <li className={css.pricingListChoosePlan}>Mobile Optimized</li>
                            <li className={css.pricingListChoosePlan}>Outstanding Support</li>
                        </ul>
                        <button className={css.btnChooseplan}><p className={css.btnChoosePlanText}>CHOOSE PLAN</p></button>
                    </div >
                    <div className={css.blockListChoosePlan}> <h3 className={css.titleBlockChoosePlan}>Business<strong className={css.pricingChoosePlan}>$999.95</strong></h3>
                        <ul className={css.listChoosePlan}>
                            <li className={css.pricingListChoosePlan}>Standard listing submission, active for
                                30 days. </li>
                            <li className={css.pricingListChoosePlan}>Web Optimized</li>
                            <li className={css.pricingListChoosePlan}>Free Server Domain</li>
                            <li className={css.pricingListChoosePlan}>Mobile Optimized</li>
                            <li className={css.pricingListChoosePlan}>Outstanding Support</li>
                        </ul>
                        <button className={css.btnChooseplan}><p className={css.btnChoosePlanText}>CHOOSE PLAN</p></button>
                    </div>
                </div>

            </div></div>
    )
}

export default ChoosePlan
