import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const ServiceInfo = () => {
	const serviceInfo = useLoaderData();
	const { picture, about, name, price, phone, email, category_id } = serviceInfo
	console.log(serviceInfo);
	return (
		<section className="bg-gray-300 text-gray-100 my-9">
			<div className="container flex flex-col-reverse mx-auto lg:flex-row">
				<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-6 lg:w-1/2 xl:w-2/5 bg-violet-400 text-gray-900">
					<div className="py-6 md:py-0 md:px-2">
						<h1 className="text-4xl font-bold text-center">{name}</h1>
						<div>
							<p className="pt-2 pb-4">{about} <br />
							<Link to={`/service/${category_id}`} className='flex bg-blue-500 p-3 font-bold text-gray-200 align-center justify-center mt-5'><FaArrowLeft className='mt-1 mr-2 ' />Back </Link></p>
						</div>
						<div className="space-y-4">
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
								</svg>
								<span>17Jc Guho Road Chorpara, Mymensingh</span>
							</p>
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
								</svg>
								<span>{phone}</span>
							</p>
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
								</svg>
								<span>{email}</span>
							</p>
						</div>
					</div>


				</div>
				<div className="lg:w-1/2  xl:w-3/5 bg-gray-300">
					<div className="flex items-center justify-center p-2 md:p-4 h-full  lg:p-4">
						<img src={picture} alt="" className="rounded-lg object-cover shadow-lg bg-gray-500 aspect-video sm:min-h-96 lg:h-full" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceInfo;

