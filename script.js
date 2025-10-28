// Tạo bản đồ và gán layer mặc định
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
});

const esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles © Esri',
  maxZoom: 19
});

const map = L.map('map', {
  center: [10.762622, 106.660172], // ví dụ: TP.HCM
  zoom: 13,
  layers: [osm] // layer mặc định ban đầu
});

// Thêm nút chuyển đổi layer
L.control.layers({
  "Bản đồ": osm,
  "Ảnh vệ tinh": esri
}).addTo(map);
