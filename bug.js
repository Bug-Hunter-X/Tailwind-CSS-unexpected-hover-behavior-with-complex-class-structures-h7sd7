```javascript
// Example showing Tailwind directives in a way that causes an error
<div class="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg group">
  <div class="inline-block relative">
    <img class="w-16 h-16 rounded-full object-cover group-hover:opacity-75 transition duration-300 ease-in-out" src="/image.jpg" alt="Image">
    <span class="absolute inset-y-0 right-0 w-4 h-4 bg-red-500 rounded-full mt-2 mr-2">
      <span class="sr-only">New</span>
    </span>
  </div>
</div>
```