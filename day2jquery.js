// $(document).ready(function() {
//     $('button').on('click', function() {
//         $.ajax({
//             url: 'https://jsonplaceholder.typicode.com/posts', 
//             method: 'GET',
//             success: function(data) {
//                 $('#data-container').empty();
//                 data.forEach(function(user) {
//                     const userInfo = `
//                         <div class="user">
//                             <h3>${user.id}</h3>
//                             <p><strong>title:</strong> ${user.title}</p>
//                             <p><strong>body:</strong> ${user.body}</p>
//                         </div>
//                     `;
//                     $('#data-container').append(userInfo);
//                 });
//             },
//             error: function(error) {
//                 console.log('Error fetching data:', error);
//                 $('#data-container').empty(); // Clear previous data
//                 const errorImage = '<img id="error-image" src="download.png" alt="Error loading data">';
//                 $('#data-container').append(errorImage);
//             }
//         });
//     });
// });
