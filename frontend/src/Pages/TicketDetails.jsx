import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { apiRequest } from "../api";

const TicketDetails = () => {

  const {id}=useParams();

  const[tickets,setTickets]=useState(null);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState("");
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");

  const  loadTicket = async () => {
    try{
        const ticketData=await apiRequest(`/api/tickets/${id}`);
        const commentData=await apiRequest(`/api/tickets/${id}/comments`);

        setTickets(JSON.parse(ticketData));
        setComments(JSON.parse(commentData));
    }
    catch(error){
         console.error(error);
         setError(error.message);
    }
    finally{
        setLoading(false);
    }
  }

  useEffect(()=>{
    loadTicket();
  },[id]);

  const addComment=async (e) => {

    e.preventDefault();

    if(!message.trim())
    {
        return;
    }
    try{
         await apiRequest(`/api/tickets/${id}/comments`,
            {
                method:"POST",
                body:JSON.stringify({
                    message:message
                }),
            }
         );
   
         setMessage("");
         await loadTicket();
    }
    catch (error) {

      alert(error.message);
    }
  };
  if(loading)
  {
     return <p className="p-8">Loading ticket...</p>;
  }
  if(error) {
    return (
      <p className="p-8 text-red-600">
        {error}
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar/>

      <main className="mx-auto max-w-4xl px-6 py-10">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
             <h1 className="text-2xl font-bold text-slate-800">
                {ticket.title}
             </h1>
             <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                   {ticket.category}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                   {ticket.priority}
                </span>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                   {ticket.status}
                </span>
             </div>
              <p className="mt-6 text-slate-600">
                    {ticket.description}
              </p>
          </div>
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
             <h2 className="text-xl font-bold text-slate-800">
                    Comments
             </h2>
             <div className="mt-6 space-y-4">
                {comments.length==0 &&
                (
                    <p className="text-slate-500">
                        No comments yet.
                    </p>
                )}
                {comments.map((comment)=>(
                    <div key={comment.id} className="rounded-lg bg-slate-50 p-4">
                        <p className="text-slate-700">
                           {comment.message}
                        </p>
                        <p className="mt-2 text-xs text-slate-400">
                            {comment.createdAt
                                ? new Date(comment.createdAt).toLocaleString()
                                : ""}
                        </p>
                    </div>

                ))}
             </div>
        
        <form
            onSubmit={addComment}
            className="mt-6"
        >
          <textarea
          value={message}
          rows="4"
          onChange={(e)=>{setMessage(e.target.value)}}
          placeholder="Write a comment..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3"
          />

          <button
              type="submit"
              className="mt-3 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
              Add Comment
          </button>
      
        </form>
       </div>
      </main>
    </div>
  );
};

export default TicketDetails;

