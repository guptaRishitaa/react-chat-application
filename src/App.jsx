import { useEffect } from "react";
import Chat from "./components/chat/chat";
import Detail from "./components/detail/detail";
import List from "./components/list/list";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  // const user = false;

  const {currentUser, isLoading, fetchUserInfo} = useUserStore();
  const {chatId} = useChatStore();
  console.log("CURRENTUSER ",currentUser)

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, (user)=>{
      fetchUserInfo(user?.uid);
    });

    return ()=>{
      unSub();
    };
  },[fetchUserInfo]);

  console.log(currentUser)

  if(isLoading) return <div className="loading">Loading...</div>


  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
         {chatId &&  <Chat />}
          {chatId &&  <Detail />}
        </>
      ) : (
        <Login />
      )}
      <Notification/>
    </div>
  );
};

export default App;


// import { useEffect } from "react";
// import Chat from "./components/chat/chat";
// import Detail from "./components/detail/detail";
// import List from "./components/list/list";
// import Login from "./components/login/Login";
// import Notification from "./components/notification/Notification";
// import { supabase } from "./lib/supabase";
// import { useUserStore } from "./lib/userStore";
// import { useChatStore } from "./lib/chatStore";

// const App = () => {
//   const { currentUser, isLoading, fetchUserInfo } = useUserStore();
//   const { chatId } = useChatStore();

//   useEffect(() => {
//     const fetchSession = async () => {
//       const { data, error } = await supabase.auth.getSession();
//       if (error) {
//         console.error("Error fetching session:", error);
//         return;
//       }
//       fetchUserInfo(data.session?.user?.id);
//     };

//     fetchSession();

//     const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
//       fetchUserInfo(session?.user?.id);
//     });

//     return () => authListener.subscription.unsubscribe();
//   }, [fetchUserInfo]);

//   if (isLoading) return <div className="loading">Loading...</div>;

//   return (
//     <div className="container">
//       {currentUser ? (
//         <>
//           <List />
//           {chatId && <Chat />}
//           {chatId && <Detail />}
//         </>
//       ) : (
//         <Login />
//       )}
//       <Notification />
//     </div>
//   );
// };

// export default App;
