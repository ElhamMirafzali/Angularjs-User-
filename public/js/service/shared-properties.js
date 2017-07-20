app.factory('sharedProperties', function () {

    var users = [
        {
            id: 1,
            name: "Elham Mirafzali",
            image: 'img/index.jpeg'
        },
        {
            id: 2,
            name: "Ehsan Mirafzali",
            image: 'img/index.jpeg'
        },
        {
            id: 3,
            name: "Sara Rezaei",
            image: "img/images.jpeg"
        },
        {
            id: 4,
            name: "Anahita Hosseini",
            image: "img/images.jpeg"
        },
        {
            id: 5,
            name: "Zahra Akbari",
            image: "img/images.jpeg"
        },
        {
            id: 6,
            name: "Mojde Robati",
            image: "img/images.jpeg"
        },
        {
            id: 7,
            name: "Bill Gates",
            image: "img/images.jpeg"
        }
    ];

    var currentUser = null;
    var editing = null;

    return{
        users : users,
        currentUser : currentUser,
        editing : editing
    }

});