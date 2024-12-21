import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance=axios.create({
  baseURL: 'https://job-portal-server-p2m3achpu-ahasan-ullahs-projects.vercel.app',
  withCredentials: true,
})
const useAxiosSecure=()=>{
  const {signOutUser}=useAuth();
  const navigate=useNavigate();
  useEffect(()=>{
    axiosInstance.interceptors.response.use(res=>{
      return res;
    },err=>{
      if(err.status===401 || err.status===403){
        signOutUser().then(()=>{
          console.log('signed out');
          navigate('/login');
        }).catch(err=>console.log(err));
      }
      return Promise.reject(err);
    })
  },[])
  return axiosInstance;
}
export default useAxiosSecure;