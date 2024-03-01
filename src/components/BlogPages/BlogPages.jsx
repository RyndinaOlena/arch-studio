import React, { useState } from 'react'
import css from '../Portfolio/Portfolio.module.css'
import cssBlog from '../BlogPages/BlogPages.module.css'
import blogList from '../BlogPages/blogList'
import { IoSearchOutline } from "react-icons/io5";
import img from '../images/heroBg/living-room-modern-tv-4813591_1280.jpg'
import ModalManagement from 'components/HomePage/modal/ModalManagement';
const BlogPages = () => {
    const [isModalOpen, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    const [startIndex, setStartIndex] = useState(0);
    const handleNextClick = () => {
        setStartIndex(prev => Math.min(prev + 4, blogList.length - 3))
    };

    const hendlePrevClick = () => {
        setStartIndex(prev => Math.max(prev - 4, 0))
    }
    const blogListBlock = blogList.slice(startIndex, startIndex + 3)
    return (
        <div className={cssBlog.container}>
            <div className={cssBlog.containerBlog} >
                <div className={css.headerPortfolio}>
                    <p className={css.textHeroPorfolioFirst}>NEWS</p>
                    <div className={css.blockTitleHeaderPortfolio}>
                        <h1 className={css.titlePorfolioBg}>Blog List</h1>
                        <h2 className={css.titleHeaderPorfolio}>Blog List</h2>
                        <p className={css.textHeroPortfolio}>Home / Portfolio List</p></div>
                </div>
            </div>

            <div className={cssBlog.contextBlog}>
                <ul className={cssBlog.blogContainerList}>{blogListBlock.map(member =>
                    <li key={member.id} className={cssBlog.itemBlog}>
                        <img alt={member.title} src={member.img} className={cssBlog.imgBlog}></img>
                        <p>{member.date} {member.name}</p>
                        <p>{member.title}</p>
                        <p>{member.text}</p>
                        <button onClick={openModal} className={cssBlog.btnRead}>read</button>
                    </li>)}

                    <div className={cssBlog.blockBtn}>
                        <button onClick={hendlePrevClick} className={cssBlog.btnTeam} disabled={startIndex === 0}>&#10094;</button>
                        <button onClick={handleNextClick} className={cssBlog.btnTeam} disabled={startIndex + 4 >= blogList.length}>&#10095;</button>
                    </div>

                </ul>

                <div className={cssBlog.searchBlog}>
                    <div className={cssBlog.searchText}><p className={cssBlog.wordsSearch}>Search</p><IoSearchOutline style={{ width: '20px', height: '20px' }} /></div>
                    <h4>Categories</h4>
                    <p className={cssBlog.choiceText}>Architecture<span >(76)</span></p>
                    <p className={cssBlog.choiceText}>Exterior<span className={cssBlog.quantity}>(56)</span></p>
                    <p className={cssBlog.choiceText}>Furniture<span className={cssBlog.quantity}>(160)</span></p>
                    <p className={cssBlog.choiceText}>Interior<span className={cssBlog.quantity}>(91)</span></p>
                    <p className={cssBlog.choiceText}>Structures<span className={cssBlog.quantity}>(56)</span></p>
                    <p className={cssBlog.choiceText}>Urban<span className={cssBlog.quantity}>(36)</span></p>
                    <h4>RECENT POSTS</h4>
                    <div className={cssBlog.exempleDisign}>
                        <img alt='qwe' src={img} className={cssBlog.imgSearch}></img>
                        <div className={cssBlog.textSearchDisign}><p>Biophilic design in office spaces</p>
                            <p className={cssBlog.textDateDisign}>APRIL 06, 2021</p></div>
                    </div>
                    <div className={cssBlog.exempleDisign}>
                        <img alt='qwe' src={img} className={cssBlog.imgSearch}></img>
                        <div className={cssBlog.textSearchDisign}><p>Biophilic design in office spaces</p>
                            <p className={cssBlog.textDateDisign}>APRIL 06, 2021</p></div>
                    </div>
                    <div className={cssBlog.exempleDisign}>
                        <img alt='qwe' src={img} className={cssBlog.imgSearch}></img>
                        <div className={cssBlog.textSearchDisign}><p>Biophilic design in office spaces</p>
                            <p className={cssBlog.textDateDisign}>APRIL 06, 2021</p></div>
                    </div>
                    <h4>#hellix</h4>
                    <div className={cssBlog.gallerySerch}>
                        <img alt='qwe' src={img} className={cssBlog.imgSearchGallery}></img>
                        <img alt='qwe' src={img} className={cssBlog.imgSearchGallery}></img>
                        <img alt='qwe' src={img} className={cssBlog.imgSearchGallery}></img>
                        <img alt='qwe' src={img} className={cssBlog.imgSearchGallery}></img>
                        <img alt='qwe' src={img} className={cssBlog.imgSearchGallery}></img>
                        <img alt='qwe' src={img} className={cssBlog.imgSearchGallery}></img>
                    </div>
                    <h4>TAGS</h4>
                    <button className={cssBlog.btnSearch}>INTERIOR</button>
                    <button className={cssBlog.btnSearch}>ART</button>
                    <button className={cssBlog.btnSearch}>HOUSE</button>
                    <button className={cssBlog.btnSearch}>EXTERIOR</button>
                    <button className={cssBlog.btnSearch}>BUILDINGS</button>
                    <button className={cssBlog.btnSearch}>DESIGN</button>
                </div>
            </div>
            {isModalOpen && (<ModalManagement closeModal={closeModal} />)}
        </div>
    )
}

export default BlogPages
