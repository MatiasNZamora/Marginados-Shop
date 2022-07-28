import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div id="footer">
        <footer className='footer text-white'>
            <div className='container'>
                <footer className='py-5'>
                    <div className='row'>
                        <div className='col-3'>
                            <h4> Happy Travel </h4>
                        </div>

                        <div className='col-2'>
                            <h5> Secciones </h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'>
                                    <NavLink to='/home' className='nav-link p-0 text-white'> Inicio </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='/service' className='nav-link p-0 text-white'> Servicios </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='/about' className='nav-link p-0 text-white'> Nosotros </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='/contact' className='nav-link p-0 text-white'> Contacto </NavLink>
                                </li>
                            </ul>
                        </div>
                        
                        <div className='col-2'>
                            <h5> Más </h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'>
                                    <NavLink to='#' className='nav-link p-0 text-white'> Blog </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='#' className='nav-link p-0 text-white'> Proyectos </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='#' className='nav-link p-0 text-white'> Preguntas frecuentes </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='#' className='nav-link p-0 text-white'> Reseñas </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className='col-4 offset-1'>
                            <form>
                                <h5> Suscribete para más noticias </h5>
                                <p> Recibí las noticias y novedades .</p>
                                <div className='d-flex w-100 grap-2'>
                                    <label htmlFrom='newletter1' className='visually-hidden'> Email </label>
                                    <imput
                                        id='newletter1'
                                        type='text'
                                        className='form-control'
                                        placeholder='Email address'
                                    />
                                    <button className='btn btn-primary rounded-pill mx-2 px-4' type='button'> Suscribite </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between pt-4 mt-4 border-top'>
                        <p> Copyright &copy; 2022 Los Marginados All rights reserved. </p>
                        <ul className='list-unstyled d-flex'>
                            <li className='ms-3'>
                                <NavLink className='link-light' to='https://www.instagram.com//'><i className='fa fa-instagram fa-2x'/></NavLink>
                            </li>
                            <li className='ms-3'>
                                <NavLink className='link-light' to='https://www.facebook.com//'><i className='fa fa-facebook fa-2x'/></NavLink>
                            </li>
                            <li className='ms-3'>
                                <NavLink className='link-light' to='https://www.linkedin.com/in//'><i className='fa fa-linkedin fa-2x'/></NavLink>
                            </li>
                            <li className='ms-3'>
                                <NavLink className='link-light' to='/'><i className='fa fa-whatsapp fa-2x'/></NavLink>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </footer>
    </div>
  )
}

export {Footer};
