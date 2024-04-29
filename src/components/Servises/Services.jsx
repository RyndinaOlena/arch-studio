import React, { useEffect, useState } from 'react'
import cssService from '../Servises/Servises.module.css'
import css from '../Portfolio/Portfolio.module.css'
import images from './servisecImg'

const Services = () => {
    const [filter, setFilter] = useState('all');
    const [filterImg, setfilterImg] = useState([])

    const handleFilterChange = (category) => {
        setFilter(category)
    };
    useEffect(() => {
        const filterImages = filter === 'all' ? images : images.filter(img => img.category === filter);
        setfilterImg(filterImages)
    }, [filter])

    return (
        <>
            <div className={cssService.containerService} >
                <div className={css.headerPortfolio}>
                    <p className={css.textHeroPorfolioFirst}>EXPLORE THE FEATURES</p>
                    <div className={css.blockTitleHeaderPortfolio}>
                        <h1 className={css.titlePorfolioBg}>Services</h1>
                        <h2 className={css.titleHeaderPorfolio}>Services</h2>
                        <p className={css.textHeroPortfolio}>Home / Portfolio List</p></div>
                </div>
            </div>
            <ul className={cssService.listItemService}>
                <li onClick={() => handleFilterChange('all')} className={cssService.itemService}>All</li>
                <li onClick={() => handleFilterChange('3dModeling')} className={cssService.itemService}>3d Modeling</li>
                <li onClick={() => handleFilterChange('Architecture')} className={cssService.itemService}>Architecture</li>
                <li onClick={() => handleFilterChange('Buildings')} className={cssService.itemService}>Buildings</li>
                <li onClick={() => handleFilterChange('LivinRoom')} className={cssService.itemService}>Living Room</li></ul>

            <div className={cssService.containerApartaments}>
                {filterImg.map(image => (<img src={image.img} alt={image.id} key={image.id} className={cssService.serviceImg} />))}
            </div>
        </>
    )
}

export default Services
