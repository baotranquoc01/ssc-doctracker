// Initial State & Dummy Data
const DEFAULT_PROPOSALS = [
    {
        id: "prop_1",
        title: "Tờ trình Phê duyệt Kế hoạch Số hóa Hồ sơ Cơ quan 2026",
        creator: "Nguyễn Văn A",
        dept: "Phòng CNTT & Lưu trữ",
        category: "ubkhcl",
        desc: "Kế hoạch nâng cấp hệ thống lưu trữ, chuyển đổi số toàn bộ hồ sơ bản giấy sang dạng số hóa phục vụ công tác tra cứu nhanh chóng.",
        createdAt: "2026-07-10T08:30:00.000Z",
        status: "in-progress",
        rootNode: {
            id: "node_root",
            label: "Tờ trình Số hóa 2026",
            status: "completed",
            user: "Nguyễn Văn A",
            comment: "Khởi tạo tờ trình và kế hoạch chi tiết",
            link: "https://example.com/ke-hoach-so-hoa-2026",
            linkLabel: "Tài liệu Kế hoạch", // custom link label
            dx: 0, dy: 0,
            children: [
                {
                    id: "node_1",
                    label: "Trưởng phòng CNTT xem xét",
                    status: "completed",
                    user: "Trần Văn B",
                    comment: "Kế hoạch hợp lý, chuyển thẩm định ngân sách và pháp lý.",
                    link: "",
                    linkLabel: "",
                    dx: 0, dy: 0,
                    children: [
                        {
                            id: "node_2",
                            label: "Phòng Tài chính Thẩm định Kinh phí",
                            status: "completed",
                            user: "Lê Thị C",
                            comment: "Dự toán kinh phí nằm trong hạn mức cho phép năm 2026.",
                            link: "https://example.com/bao-cao-kinh-phi-so-hoa",
                            linkLabel: "Báo cáo Kinh phí", // custom link label
                            dx: 0, dy: 0,
                            children: []
                        },
                        {
                            id: "node_3",
                            label: "Phòng Pháp chế Thẩm định Hợp đồng",
                            status: "in-progress",
                            user: "Phạm Văn D",
                            comment: "Đang kiểm tra các điều khoản bảo mật thông tin với đối tác thầu.",
                            link: "https://example.com/du-thao-hop-dong-so-hoa",
                            linkLabel: "Dự thảo Hợp đồng", // custom link label
                            dx: 0, dy: 0,
                            children: [
                                {
                                    id: "node_4",
                                    label: "Ban Giám đốc Phê duyệt cuối cùng",
                                    status: "pending",
                                    user: "Giám đốc Nguyễn Văn E",
                                    comment: "",
                                    link: "",
                                    linkLabel: "",
                                    dx: 0, dy: 0,
                                    children: [
                                        {
                                            id: "node_5",
                                            label: "Văn thư Ban hành Quyết định",
                                            status: "pending",
                                            user: "Văn thư Cơ quan",
                                            comment: "",
                                            link: "",
                                            linkLabel: "",
                                            dx: 0, dy: 0,
                                            isFinal: true,
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "prop_2",
        title: "Tờ trình Mua sắm trang thiết bị CNTT phòng họp trực tuyến",
        creator: "Lê Văn Hùng",
        dept: "Phòng Hành chính - Quản trị",
        category: "ubns",
        desc: "Đề xuất mua sắm 2 bộ camera hội nghị trực tuyến chất lượng cao và micro chuyên dụng cho phòng họp lớn.",
        createdAt: "2026-07-12T10:15:00.000Z",
        status: "supplementing",
        rootNode: {
            id: "node_root_2",
            label: "Tờ trình Mua Thiết Bị Phòng Họp",
            status: "supplementing",
            user: "Lê Văn Hùng",
            comment: "Trình ký dự thảo mua sắm thiết bị phòng họp trực tuyến.",
            link: "",
            linkLabel: "",
            dx: 0, dy: 0,
            children: [
                {
                    id: "node_2_1",
                    label: "Trưởng phòng HC-QT phê duyệt",
                    status: "supplementing",
                    user: "Nguyễn Thị Mai",
                    comment: "Yêu cầu chỉnh sửa: Cần khảo sát giá của ít nhất 3 nhà cung cấp khác nhau trước khi trình duyệt.",
                    link: "https://example.com/bieu-mau-khao-sat-gia",
                    linkLabel: "Bảng khảo sát giá", // custom link label
                    dx: 0, dy: 0,
                    isFinal: true,
                    children: []
                }
            ]
        }
    },
    {
        id: "prop_3",
        title: "Tờ trình Tổ chức chương trình Đào tạo Kỹ năng số cho cán bộ công nhân viên",
        creator: "Hoàng Thị Lan",
        dept: "Phòng Nhân sự",
        category: "ubns",
        desc: "Đề xuất tổ chức khóa học nâng cao nhận thức an toàn thông tin và kỹ năng văn phòng số cho toàn thể nhân viên.",
        createdAt: "2026-07-13T02:00:00.000Z",
        status: "completed",
        rootNode: {
            id: "node_root_3",
            label: "Tờ trình Đào Tạo Kỹ Năng Số",
            status: "completed",
            user: "Hoàng Thị Lan",
            comment: "Khởi tạo tờ trình xin ý kiến đào tạo tập trung.",
            link: "",
            linkLabel: "",
            dx: 0, dy: 0,
            children: [
                {
                    id: "node_3_1",
                    label: "Phòng Nhân sự duyệt nội dung",
                    status: "completed",
                    user: "Hoàng Thị Lan",
                    comment: "Đã chốt khung chương trình đào tạo.",
                    link: "https://example.com/khung-chuong-trinh-dt",
                    linkLabel: "Khung đào tạo", // custom link label
                    dx: 0, dy: 0,
                    children: [
                        {
                            id: "node_3_2",
                            label: "Ban Giám đốc Phê duyệt",
                            status: "completed",
                            user: "Phó Giám đốc Trần Văn Huy",
                            comment: "Đồng ý tổ chức vào tháng 8/2026. Chú ý tối ưu chi phí thuê chuyên gia.",
                            link: "",
                            linkLabel: "",
                            dx: 0, dy: 0,
                            isFinal: true,
                            children: []
                        }
                    ]
                }
            ]
        }
    }
];

let proposals = [];
let activeProposalId = null;
let activeFilterTab = "all";

// Zoom & Pan State
let zoom = 1.0;
let panX = 0;
let panY = 0;
let isPanning = false;
let startX = 0;
let startY = 0;

// Node Drag State
let isDraggingNode = false;
let draggedNodeId = null;
let nodeDragStartX = 0;
let nodeDragStartY = 0;
let nodeInitX = 0;
let nodeInitY = 0;

// Sidebar Pagination State
let currentSidebarPage = 1;
const SIDEBAR_PAGE_SIZE = 20;

// ResizeObserver for card resizing
let nodeResizeObserver = null;

// DOM Elements
const sidebarEl = document.getElementById("sidebar");
const resizerEl = document.getElementById("sidebar-resizer");
const proposalListEl = document.getElementById("proposal-list");
const activeProposalInfoEl = document.getElementById("active-proposal-info");
const headerActionsEl = document.getElementById("header-actions");
const canvasContainerEl = document.getElementById("canvas-container");
const mapViewportEl = document.getElementById("map-viewport");
const mapContentEl = document.getElementById("map-content");
const svgCanvasEl = document.getElementById("svg-canvas");
const mindmapTreeEl = document.getElementById("mindmap-tree");
const emptyStateEl = document.getElementById("empty-state");

// Search, Sort, Category & Date Inputs
const searchInputEl = document.getElementById("search-input");
const categoryFilterSelectEl = document.getElementById("category-filter-select");
const dateFilterInputEl = document.getElementById("date-filter-input");
const btnClearDateEl = document.getElementById("btn-clear-date");
const sortSelectEl = document.getElementById("sort-select");

// Theme Switcher Button
const btnThemeToggle = document.getElementById("btn-theme-toggle");

// Modals
const modalProposal = document.getElementById("modal-proposal");
const modalNode = document.getElementById("modal-node");
const modalSubnode = document.getElementById("modal-subnode");

// Buttons
const btnNewProposal = document.getElementById("btn-new-proposal");
const btnDeleteProposal = document.getElementById("btn-delete-proposal");
const btnShareProposal = document.getElementById("btn-share-proposal");

// Forms
const formNewProposal = document.getElementById("form-new-proposal");
const formEditNode = document.getElementById("form-edit-node");
const formAddSubnode = document.getElementById("form-add-subnode");

// Backup & Import selectors
const btnExportData = document.getElementById("btn-export-data");
const btnImportData = document.getElementById("btn-import-data");
const importFileInput = document.getElementById("import-file-input");

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initData();
    setupEventListeners();
    setupResizer();
    setupZoomPan();
    setupNodeDragGlobal();
    setupResizeObserver();
    setupBackupRestore();
    renderSidebar();
    
    // Select first proposal by default if exists
    if (proposals.length > 0) {
        selectProposal(proposals[0].id);
    }
});

// Initialize Theme from LocalStorage
function initTheme() {
    const savedTheme = localStorage.getItem("docmap_theme") || "light";
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        btnThemeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        document.body.classList.remove("light-mode");
        btnThemeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
}

function migrateProposalToGraph(proposal) {
    if (proposal.rootNode && !proposal.nodes) {
        const nodes = [];
        const links = [];
        
        function traverse(node, parentId = null) {
            const nodeCopy = {
                id: node.id,
                label: node.label,
                status: node.status,
                user: node.user,
                comment: node.comment,
                link: node.link,
                linkLabel: node.linkLabel,
                x: 0, // will layout next
                y: 0,
                isFinal: !!node.isFinal
            };
            nodes.push(nodeCopy);
            
            if (parentId) {
                links.push({ from: parentId, to: node.id });
            }
            
            if (node.children) {
                node.children.forEach(child => traverse(child, node.id));
            }
        }
        traverse(proposal.rootNode);
        
        proposal.nodes = nodes;
        proposal.links = links;
        delete proposal.rootNode;
    }
}

function layoutGraph(proposal) {
    if (!proposal.nodes || proposal.nodes.length === 0) return;
    
    // Find incoming/outgoing links count for each node
    const incoming = {};
    const outgoing = {};
    proposal.nodes.forEach(n => {
        incoming[n.id] = [];
        outgoing[n.id] = [];
    });
    
    if (proposal.links) {
        proposal.links.forEach(l => {
            if (incoming[l.to]) incoming[l.to].push(l.from);
            if (outgoing[l.from]) outgoing[l.from].push(l.to);
        });
    }
    
    // Find root nodes (nodes with no incoming links)
    let roots = proposal.nodes.filter(n => incoming[n.id].length === 0);
    if (roots.length === 0) roots = [proposal.nodes[0]];
    
    // Calculate layer (BFS/DFS distance from nearest root)
    const layers = {};
    const queue = [];
    
    roots.forEach(r => {
        layers[r.id] = 0;
        queue.push(r.id);
    });
    
    while (queue.length > 0) {
        const currId = queue.shift();
        const currLayer = layers[currId];
        
        const children = outgoing[currId] || [];
        children.forEach(childId => {
            if (layers[childId] === undefined || layers[childId] < currLayer + 1) {
                layers[childId] = currLayer + 1;
                queue.push(childId);
            }
        });
    }
    
    // Group nodes by layer
    const layerGroups = {};
    proposal.nodes.forEach(n => {
        const l = layers[n.id] !== undefined ? layers[n.id] : 0;
        if (!layerGroups[l]) layerGroups[l] = [];
        layerGroups[l].push(n);
    });
    
    // Assign X and Y coordinates based on layers
    Object.keys(layerGroups).forEach(lStr => {
        const layer = parseInt(lStr, 10);
        const group = layerGroups[layer];
        
        group.forEach((node, index) => {
            if (node.x === undefined || node.x === 0) {
                node.x = 50 + layer * 380;
                node.y = 120 + index * 260;
            }
        });
    });
}

function generateShareUrl() {
    const proposal = proposals.find(p => p.id === activeProposalId);
    if (!proposal) return;
    
    const jsonStr = JSON.stringify(proposal);
    const b64 = btoa(unescape(encodeURIComponent(jsonStr)));
    
    const baseUrl = window.location.href.split('?')[0];
    const shareUrl = baseUrl + "?share=" + encodeURIComponent(b64);
    
    navigator.clipboard.writeText(shareUrl).then(() => {
        alert("Đã sao chép liên kết chia sẻ vào bộ nhớ tạm! Bạn có thể gửi đường dẫn này cho người khác xem.");
    }).catch(err => {
        console.error("Lỗi sao chép liên kết:", err);
        prompt("Sao chép liên kết chia sẻ tại đây:", shareUrl);
    });
}

function checkSharedProposal() {
    const urlParams = new URLSearchParams(window.location.search);
    const shareData = urlParams.get('share');
    if (shareData) {
        try {
            const jsonStr = decodeURIComponent(escape(atob(shareData)));
            const sharedProposal = JSON.parse(jsonStr);
            
            if (sharedProposal && sharedProposal.id && sharedProposal.nodes) {
                migrateProposalToGraph(sharedProposal);
                layoutGraph(sharedProposal);
                
                const existingIndex = proposals.findIndex(p => p.id === sharedProposal.id);
                if (existingIndex === -1) {
                    if (confirm(`Bạn nhận được chia sẻ Tờ trình: "${sharedProposal.title}". Bạn có muốn lưu tờ trình này vào danh sách của bạn không?`)) {
                        proposals.unshift(sharedProposal);
                        saveData();
                    } else {
                        proposals.unshift(sharedProposal);
                    }
                } else {
                    proposals[existingIndex] = sharedProposal;
                    saveData();
                }
                activeProposalId = sharedProposal.id;
                
                // Clear URL query parameters cleanly without reloading the page
                const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
                window.history.replaceState({ path: cleanUrl }, '', cleanUrl);
            }
        } catch (e) {
            console.error("Lỗi giải mã liên kết chia sẻ:", e);
        }
    }
}

function initData() {
    const saved = localStorage.getItem("docmap_proposals");
    if (saved) {
        try {
            proposals = JSON.parse(saved);
            const isCorrupted = proposals.some(prop => !prop || (!prop.nodes && !prop.rootNode));
            if (isCorrupted) {
                throw new Error("Dữ liệu cũ bị lỗi cấu trúc đồ thị");
            }
            proposals.forEach(prop => {
                migrateProposalToGraph(prop);
                layoutGraph(prop);
                updateProposalStatus(prop);
            });
            saveData();
        } catch (e) {
            console.error("Lỗi parse dữ liệu localStorage:", e);
            proposals = JSON.parse(JSON.stringify(DEFAULT_PROPOSALS));
            proposals.forEach(prop => {
                migrateProposalToGraph(prop);
                layoutGraph(prop);
                updateProposalStatus(prop);
            });
            saveData();
        }
    } else {
        proposals = JSON.parse(JSON.stringify(DEFAULT_PROPOSALS));
        proposals.forEach(prop => {
            migrateProposalToGraph(prop);
            layoutGraph(prop);
            updateProposalStatus(prop);
        });
        saveData();
    }
    
    checkSharedProposal();
    updateTabCounts();
}

function saveData() {
    localStorage.setItem("docmap_proposals", JSON.stringify(proposals));
    updateTabCounts();
}

function setupEventListeners() {
    // Theme Toggle click event listener
    btnThemeToggle.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-mode");
        if (isLight) {
            btnThemeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            localStorage.setItem("docmap_theme", "light");
        } else {
            btnThemeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
            localStorage.setItem("docmap_theme", "dark");
        }
        
        // Redraw lines after transition settles
        setTimeout(() => {
            if (activeProposalId) {
                drawConnections();
            }
        }, 150);
    });

    // Search, Category & Sort & Date Filter
    searchInputEl.addEventListener("input", () => { currentSidebarPage = 1; renderSidebar(); });
    categoryFilterSelectEl.addEventListener("change", () => { currentSidebarPage = 1; renderSidebar(); });
    sortSelectEl.addEventListener("change", () => { currentSidebarPage = 1; renderSidebar(); });

    // Date Filter Input Event Listeners
    dateFilterInputEl.addEventListener("change", () => {
        const hasVal = !!dateFilterInputEl.value;
        btnClearDateEl.style.display = hasVal ? "block" : "none";
        currentSidebarPage = 1;
        renderSidebar();
    });

    btnClearDateEl.addEventListener("click", () => {
        dateFilterInputEl.value = "";
        btnClearDateEl.style.display = "none";
        currentSidebarPage = 1;
        renderSidebar();
    });

    // Tab buttons for filtering
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilterTab = btn.getAttribute("data-status");
            currentSidebarPage = 1;
            renderSidebar();
        });
    });

    // New Proposal Modal
    btnNewProposal.addEventListener("click", () => openModal(modalProposal));
    document.getElementById("close-proposal-modal").addEventListener("click", () => closeModal(modalProposal));
    document.getElementById("btn-cancel-proposal").addEventListener("click", () => closeModal(modalProposal));
    
    formNewProposal.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("proposal-title").value.trim();
        const creator = document.getElementById("proposal-creator").value.trim();
        const dept = document.getElementById("proposal-dept").value.trim();
        const category = document.getElementById("proposal-category").value;
        const desc = document.getElementById("proposal-desc").value.trim();
        
        // Link and link labels
        const link = document.getElementById("proposal-link").value.trim();
        const linkLabel = document.getElementById("proposal-link-label").value.trim();
        
        const rootId = "node_root_" + Date.now();
        const newProposal = {
            id: "prop_" + Date.now(),
            title,
            creator,
            dept,
            category,
            desc,
            createdAt: new Date().toISOString(),
            status: "pending",
            nodes: [
                {
                    id: rootId,
                    label: title,
                    status: "pending",
                    user: creator,
                    comment: desc || "Khởi tạo tờ trình",
                    link: link,
                    linkLabel: linkLabel,
                    x: 50,
                    y: 150,
                    isFinal: false
                }
            ],
            links: []
        };

        proposals.push(newProposal);
        saveData();
        renderSidebar();
        closeModal(modalProposal);
        formNewProposal.reset();
        selectProposal(newProposal.id);
    });

    // Delete Proposal
    btnDeleteProposal.addEventListener("click", () => {
        if (!activeProposalId) return;
        const prop = proposals.find(p => p.id === activeProposalId);
        if (confirm(`Bạn có chắc chắn muốn xóa tờ trình "${prop.title}" không?`)) {
            proposals = proposals.filter(p => p.id !== activeProposalId);
            saveData();
            activeProposalId = null;
            renderSidebar();
            
            if (proposals.length > 0) {
                selectProposal(proposals[0].id);
            } else {
                updateUIForNoActiveProposal();
            }
        }
    });

    // Share Proposal Link
    btnShareProposal.addEventListener("click", () => {
        generateShareUrl();
    });

    // Edit Node Modal Events
    document.getElementById("close-node-modal").addEventListener("click", () => closeModal(modalNode));
    document.getElementById("btn-cancel-node").addEventListener("click", () => closeModal(modalNode));
    formEditNode.addEventListener("submit", (e) => {
        e.preventDefault();
        const nodeId = document.getElementById("edit-node-id").value;
        const label = document.getElementById("node-label").value.trim();
        const user = document.getElementById("node-user").value.trim();
        const status = document.getElementById("node-status").value;
        const comment = document.getElementById("node-comment").value.trim();
        const link = document.getElementById("node-link").value.trim();
        const linkLabel = document.getElementById("node-link-label").value.trim();
        const isFinal = document.getElementById("node-is-final").checked;

        const proposal = proposals.find(p => p.id === activeProposalId);
        if (proposal) {
            const isRoot = proposal.nodes[0] && proposal.nodes[0].id === nodeId;
            if (!isRoot) {
                const selectedParentChks = document.querySelectorAll("#edit-node-parents .parent-node-chk:checked");
                const selectedParentIds = Array.from(selectedParentChks).map(chk => chk.value);
                
                // Update proposal links
                proposal.links = proposal.links.filter(l => l.to !== nodeId);
                selectedParentIds.forEach(pId => {
                    proposal.links.push({ from: pId, to: nodeId });
                });
            }
        }

        updateNodeInActiveProposal(nodeId, { label, user, status, comment, link, linkLabel, isFinal });
        closeModal(modalNode);
    });

    // Add Sub-node Modal Events
    document.getElementById("close-subnode-modal").addEventListener("click", () => closeModal(modalSubnode));
    document.getElementById("btn-cancel-subnode").addEventListener("click", () => closeModal(modalSubnode));
    formAddSubnode.addEventListener("submit", (e) => {
        e.preventDefault();
        const label = document.getElementById("subnode-label").value.trim();
        const user = document.getElementById("subnode-user").value.trim();
        const status = document.getElementById("subnode-status").value;
        const comment = document.getElementById("subnode-comment").value.trim();
        const link = document.getElementById("subnode-link").value.trim();
        const linkLabel = document.getElementById("subnode-link-label").value.trim();
        const isFinal = document.getElementById("subnode-is-final").checked;

        const selectedParentChks = document.querySelectorAll("#add-node-parents .parent-node-chk:checked");
        const selectedParentIds = Array.from(selectedParentChks).map(chk => chk.value);

        const newNode = {
            id: "node_" + Date.now(),
            label,
            status,
            user,
            comment,
            link,
            linkLabel,
            isFinal,
            x: 0,
            y: 0
        };

        addChildNodeInActiveProposal(selectedParentIds, newNode);
        closeModal(modalSubnode);
        formAddSubnode.reset();
    });

    // Re-draw connection lines on window resize
    window.addEventListener("resize", () => {
        if (activeProposalId) {
            drawConnections();
        }
    });
}

// Sidebar panel resizer dragging logic
function setupResizer() {
    let isResizing = false;

    resizerEl.addEventListener("mousedown", (e) => {
        isResizing = true;
        resizerEl.classList.add("active");
        document.body.style.cursor = "col-resize";
        e.preventDefault();
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const newWidth = Math.max(250, Math.min(500, e.clientX));
        document.documentElement.style.setProperty('--sidebar-width', `${newWidth}px`);
        
        // Redraw SVG connection lines on width shifts
        if (activeProposalId) {
            drawConnections();
        }
    });

    document.addEventListener("mouseup", () => {
        if (isResizing) {
            isResizing = false;
            resizerEl.classList.remove("active");
            document.body.style.cursor = "default";
        }
    });
}

// Zoom & Pan controls setup
function setupZoomPan() {
    // Panning dragging events
    mapViewportEl.addEventListener("mousedown", (e) => {
        // Only pan with left mouse click
        if (e.button !== 0) return;

        // Skip panning if clicking inside node drag box, form items, links or textarea inputs
        if (e.target.closest("button") || e.target.closest("a") || e.target.closest("select") || e.target.closest("input") || e.target.closest("textarea") || e.target.closest(".mindmap-node")) {
            return;
        }

        isPanning = true;
        startX = e.clientX - panX;
        startY = e.clientY - panY;
        mapViewportEl.style.cursor = "grabbing";
        e.preventDefault();
    });

    document.addEventListener("mousemove", (e) => {
        if (!isPanning) return;
        panX = e.clientX - startX;
        panY = e.clientY - startY;
        applyTransform();
    });

    document.addEventListener("mouseup", () => {
        if (isPanning) {
            isPanning = false;
            mapViewportEl.style.cursor = "grab";
        }
    });

    // Mouse wheel zoom centering
    mapViewportEl.addEventListener("wheel", (e) => {
        e.preventDefault();
        
        const rect = mapViewportEl.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Exponential zoom based on deltaY magnitude for smooth trackpad and mousewheel zoom
        const zoomFactor = -e.deltaY * 0.0012;
        const nextZoom = Math.min(2.0, Math.max(0.4, zoom * Math.exp(zoomFactor)));

        // Keep focal zoom point centered
        const xs = (mouseX - panX) / zoom;
        const ys = (mouseY - panY) / zoom;

        zoom = nextZoom;
        panX = mouseX - xs * zoom;
        panY = mouseY - ys * zoom;

        applyTransform();
    }, { passive: false });

    // Floating Zoom Controls Buttons
    document.getElementById("btn-zoom-in").addEventListener("click", () => {
        zoom = Math.min(2.0, zoom + 0.15);
        applyTransform();
    });

    document.getElementById("btn-zoom-out").addEventListener("click", () => {
        zoom = Math.max(0.4, zoom - 0.15);
        applyTransform();
    });

    document.getElementById("btn-zoom-reset").addEventListener("click", () => {
        zoom = 1.0;
        panX = 0;
        panY = 0;
        applyTransform();
    });

    document.getElementById("btn-zoom-fit").addEventListener("click", () => {
        zoomFit();
    });

    document.getElementById("btn-add-node-global").addEventListener("click", () => {
        openAddSubnodeModal(null);
    });
}

// Global Node Drag setup
function setupNodeDragGlobal() {
    document.addEventListener("mousemove", (e) => {
        if (isDraggingNode && draggedNodeId) {
            const deltaX = e.clientX - nodeDragStartX;
            const deltaY = e.clientY - nodeDragStartY;
            
            const proposal = proposals.find(p => p.id === activeProposalId);
            if (!proposal || !proposal.nodes) return;
            
            const node = proposal.nodes.find(n => n.id === draggedNodeId);
            if (node) {
                // Drag displacement accounts for current zoom factor
                node.x = nodeInitX + (deltaX / zoom);
                node.y = nodeInitY + (deltaY / zoom);
                
                const nodeEl = mindmapTreeEl.querySelector(`[data-id="${draggedNodeId}"]`);
                if (nodeEl) {
                    nodeEl.style.left = `${node.x}px`;
                    nodeEl.style.top = `${node.y}px`;
                }
                
                drawConnections();
            }
        }
    });

    document.addEventListener("mouseup", () => {
        if (isDraggingNode) {
            isDraggingNode = false;
            const proposal = proposals.find(p => p.id === activeProposalId);
            if (proposal) {
                if (!ensureProposalPersisted(proposal)) {
                    renderActiveProposal(false);
                } else {
                    saveData();
                }
            }
            draggedNodeId = null;
            document.body.style.cursor = "default";
        }
    });
}

// JSON Backup & Recovery
function setupBackupRestore() {
    btnExportData.addEventListener("click", () => {
        const dataStr = JSON.stringify(proposals, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = 'docmap_proposals_' + new Date().toISOString().split('T')[0] + '.json';
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    });

    btnImportData.addEventListener("click", () => {
        importFileInput.click();
    });

    importFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                const imported = JSON.parse(evt.target.result);
                if (Array.isArray(imported)) {
                    proposals = imported;
                    saveData();
                    currentSidebarPage = 1;
                    renderSidebar();
                    if (proposals.length > 0) {
                        selectProposal(proposals[0].id);
                    } else {
                        updateUIForNoActiveProposal();
                    }
                    alert("Nhập dữ liệu thành công!");
                } else {
                    alert("Định dạng tệp dữ liệu không hợp lệ.");
                }
            } catch (err) {
                alert("Lỗi đọc tệp dữ liệu: " + err.message);
            }
            importFileInput.value = ""; // clear input
        };
        reader.readAsText(file);
    });
}

function applyTransform() {
    mapContentEl.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
    document.getElementById("zoom-badge").textContent = `${Math.round(zoom * 100)}%`;
}

function zoomFit() {
    const proposal = proposals.find(p => p.id === activeProposalId);
    if (!proposal || !proposal.nodes || proposal.nodes.length === 0) return;
    
    // Find min and max coordinates
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    
    proposal.nodes.forEach(n => {
        const cardWidth = 250; 
        const cardHeight = 150; 
        
        minX = Math.min(minX, n.x || 0);
        maxX = Math.max(maxX, (n.x || 0) + cardWidth);
        minY = Math.min(minY, n.y || 0);
        maxY = Math.max(maxY, (n.y || 0) + cardHeight);
    });
    
    const viewportWidth = mapViewportEl.clientWidth;
    const viewportHeight = mapViewportEl.clientHeight;
    
    const contentWidth = maxX - minX + 100;
    const contentHeight = maxY - minY + 100;
    
    const scaleX = viewportWidth / contentWidth;
    const scaleY = viewportHeight / contentHeight;
    zoom = Math.min(Math.max(0.4, Math.min(scaleX, scaleY)), 1.2); 
    
    // Shift center by 400px to account for the padding on .map-content
    const centerX = (minX + maxX) / 2 + 400;
    const centerY = (minY + maxY) / 2 + 400;
    
    panX = viewportWidth / 2 - centerX * zoom;
    panY = viewportHeight / 2 - centerY * zoom;
    
    applyTransform();
}

// Modal Helpers
function openModal(modal) {
    modal.classList.add("show");
}

function closeModal(modal) {
    modal.classList.remove("show");
}

function ensureProposalPersisted(proposal) {
    if (proposal.isTemp) {
        if (confirm(`Tờ trình "${proposal.title}" đang ở chế độ xem tạm thời qua liên kết. Bạn có muốn lưu tờ trình này vào danh sách của bạn để thực hiện chỉnh sửa không?`)) {
            delete proposal.isTemp;
            saveData();
            renderSidebar();
            return true;
        }
        return false;
    }
    return true;
}

// Node Operations in Active Proposal
function findNodeRecursive(rootOrNodes, id) {
    const proposal = proposals.find(p => p.id === activeProposalId);
    if (proposal && proposal.nodes) {
        return proposal.nodes.find(n => n.id === id);
    }
    if (Array.isArray(rootOrNodes)) {
        return rootOrNodes.find(n => n.id === id);
    }
    if (rootOrNodes && rootOrNodes.id === id) return rootOrNodes;
    return null;
}

function findFinalStepNode(proposalOrRoot) {
    const proposal = proposals.find(p => p.id === activeProposalId) || proposalOrRoot;
    if (proposal && proposal.nodes) {
        return proposal.nodes.find(n => n.isFinal);
    }
    return null;
}

function clearFinalStepRecursive(proposalOrRoot) {
    const proposal = proposals.find(p => p.id === activeProposalId) || proposalOrRoot;
    if (proposal && proposal.nodes) {
        proposal.nodes.forEach(n => n.isFinal = false);
    }
}

// Cascading status changes down to all children recursively in Graph DFS
function updateStatusRecursive(nodeId, newStatus, visited = new Set()) {
    const proposal = proposals.find(p => p.id === activeProposalId);
    if (!proposal) return;
    
    if (visited.has(nodeId)) return;
    visited.add(nodeId);
    
    const node = proposal.nodes.find(n => n.id === nodeId);
    if (node) {
        node.status = newStatus;
    }
    
    const outgoingLinks = proposal.links.filter(l => l.from === nodeId);
    outgoingLinks.forEach(link => {
        updateStatusRecursive(link.to, newStatus, visited);
    });
}

function updateNodeInActiveProposal(nodeId, updatedData) {
    const proposal = proposals.find(p => p.id === activeProposalId);
    if (!proposal) return;
    
    if (!ensureProposalPersisted(proposal)) return;

    const node = proposal.nodes.find(n => n.id === nodeId);
    if (node) {
        // If this node is marked as final step, clear isFinal on all other nodes
        if (updatedData.isFinal) {
            clearFinalStepRecursive(proposal);
        }

        const isRoot = proposal.nodes[0] && proposal.nodes[0].id === nodeId;

        // Cascade Status: if parent status changed, sync all children! (Exclude root node to keep step history intact)
        if (node.status !== updatedData.status && !isRoot) {
            updateStatusRecursive(node.id, updatedData.status);
        }

        Object.assign(node, updatedData);
        
        if (isRoot) {
            proposal.title = updatedData.label;
            proposal.creator = updatedData.user;
        }

        updateProposalStatus(proposal);
        saveData();
        renderSidebar();
        renderActiveProposal(false); // don't refit tree, preserve current zoom/pan
    }
}

// Add Sub-node in active proposal
function addChildNodeInActiveProposal(selectedParentIds, newNode) {
    const proposal = proposals.find(p => p.id === activeProposalId);
    if (!proposal) return;

    if (!ensureProposalPersisted(proposal)) return;

    // If the new child is marked as final step, clear isFinal on all other nodes
    if (newNode.isFinal) {
        clearFinalStepRecursive(proposal);
    }

    // Set initial position of the new node to the right of average coordinates of parent nodes
    let parentXSum = 0;
    let parentYSum = 0;
    let count = 0;
    
    if (selectedParentIds && selectedParentIds.length > 0) {
        selectedParentIds.forEach(pId => {
            const parentNode = proposal.nodes.find(n => n.id === pId);
            if (parentNode) {
                parentXSum += parentNode.x || 50;
                parentYSum += parentNode.y || 120;
                count++;
            }
        });
    }
    
    let parentX = count > 0 ? (parentXSum / count) : 50;
    let parentY = count > 0 ? (parentYSum / count) : 150;
    
    newNode.x = parentX + 380;
    newNode.y = parentY + Math.floor(Math.random() * 80) - 40; // slight random offset

    proposal.nodes.push(newNode);
    
    // Add connection links
    if (selectedParentIds && selectedParentIds.length > 0) {
        selectedParentIds.forEach(pId => {
            proposal.links.push({ from: pId, to: newNode.id });
        });
    }
    
    updateProposalStatus(proposal);
    saveData();
    renderSidebar();
    renderActiveProposal(false); // preserve zoom/pan
}

function deleteNodeInActiveProposal(nodeId) {
    const proposal = proposals.find(p => p.id === activeProposalId);
    if (!proposal) return;

    // Allow deleting temporary proposal from memory without prompting for persistence
    if (proposal.isTemp) {
        proposals = proposals.filter(p => p.id !== activeProposalId);
        activeProposalId = null;
        renderSidebar();
        updateUIForNoActiveProposal();
        return;
    }

    if (!ensureProposalPersisted(proposal)) return;

    const isRoot = proposal.nodes[0] && proposal.nodes[0].id === nodeId;
    if (isRoot) {
        alert("Không thể xóa nút gốc. Hãy xóa toàn bộ tờ trình nếu muốn.");
        return;
    }

    if (confirm("Bạn có chắc chắn muốn xóa bước xử lý này và tất cả các liên kết liên quan?")) {
        proposal.nodes = proposal.nodes.filter(n => n.id !== nodeId);
        proposal.links = proposal.links.filter(l => l.from !== nodeId && l.to !== nodeId);
        
        updateProposalStatus(proposal);
        saveData();
        renderSidebar();
        renderActiveProposal(false);
    }
}

function updateProposalStatus(proposal) {
    const finalNode = findFinalStepNode(proposal);
    const rootNode = proposal.nodes && proposal.nodes[0];

    if (finalNode) {
        proposal.status = finalNode.status;
        if (rootNode) rootNode.status = finalNode.status; // Sync the first node box!
    } else {
        if (rootNode) {
            proposal.status = rootNode.status;
        }
    }
}

// In-place Comment / Opinion Updates directly on Node Textarea
window.updateCommentInPlace = function(textarea) {
    const nodeId = textarea.getAttribute("data-id");
    const val = textarea.value.trim();
    
    const proposal = proposals.find(p => p.id === activeProposalId);
    if (!proposal) return;

    if (!ensureProposalPersisted(proposal)) {
        renderActiveProposal(false);
        return;
    }

    const node = proposal.nodes.find(n => n.id === nodeId);
    if (node) {
        node.comment = val;
        saveData();
    }
}

// Helper to auto-resize textareas so scrollbars are hidden
window.autoResizeTextarea = function(ta) {
    ta.style.height = 'auto';
    ta.style.height = (ta.scrollHeight + 2) + 'px';
}

function resizeAllCommentTextareas() {
    const textareas = document.querySelectorAll(".node-comment-input");
    textareas.forEach(ta => {
        window.autoResizeTextarea(ta);
    });
}

function setupResizeObserver() {
    if ('ResizeObserver' in window) {
        nodeResizeObserver = new ResizeObserver(entries => {
            drawConnections();
        });
    }
}

// Tab Category Counters Updates
function updateTabCounts() {
    const all = proposals.length;
    const pending = proposals.filter(p => p.status === "pending").length;
    const inProgress = proposals.filter(p => p.status === "in-progress").length;
    const processed = proposals.filter(p => p.status === "processed").length;
    const supplementing = proposals.filter(p => p.status === "supplementing" || p.status === "rejected").length;
    const completed = proposals.filter(p => p.status === "completed").length;

    document.getElementById("count-all").textContent = all;
    if (document.getElementById("count-pending")) document.getElementById("count-pending").textContent = pending;
    if (document.getElementById("count-in-progress")) document.getElementById("count-in-progress").textContent = inProgress;
    if (document.getElementById("count-processed")) document.getElementById("count-processed").textContent = processed;
    if (document.getElementById("count-supplementing")) document.getElementById("count-supplementing").textContent = supplementing;
    if (document.getElementById("count-completed")) document.getElementById("count-completed").textContent = completed;
}

// Sidebar Render & Logic
function renderSidebar() {
    const query = searchInputEl.value.trim().toLowerCase();
    const activeCategory = categoryFilterSelectEl.value; // "all", "ubkhcl", "ubns"
    const dateFilterVal = dateFilterInputEl.value; // "YYYY-MM-DD"
    const sortBy = sortSelectEl.value;

    let filtered = proposals.filter(prop => {
        // 1. Filter by status tab
        if (activeFilterTab !== "all") {
            const propStatusNormalized = prop.status === "rejected" ? "supplementing" : prop.status;
            if (propStatusNormalized !== activeFilterTab) {
                return false;
            }
        }

        // 2. Filter by Committee Category (UBKHCL or UBNS)
        if (activeCategory !== "all" && prop.category !== activeCategory) {
            return false;
        }

        // 3. Filter by date picker
        if (dateFilterVal) {
            const propDateStr = new Date(prop.createdAt).toISOString().split('T')[0];
            if (propDateStr !== dateFilterVal) {
                return false;
            }
        }

        // 4. Filter by search query text
        const matchMeta = prop.title.toLowerCase().includes(query) || prop.creator.toLowerCase().includes(query);
        
        const matchSteps = !!(prop.nodes && prop.nodes.some(node => 
            node.label.toLowerCase().includes(query) || 
            (node.comment && node.comment.toLowerCase().includes(query)) ||
            (node.user && node.user.toLowerCase().includes(query))
        ));

        return matchMeta || matchSteps;
    });

    // Sorting
    filtered.sort((a, b) => {
        if (sortBy === "latest") {
            return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sortBy === "oldest") {
            return new Date(a.createdAt) - new Date(b.createdAt);
        } else if (sortBy === "alphabetical") {
            return a.title.localeCompare(b.title, "vi");
        } else if (sortBy === "status") {
            const statusWeight = { "supplementing": 0, "rejected": 0, "pending": 1, "in-progress": 2, "processed": 3, "completed": 4 };
            const aWeight = statusWeight[a.status] !== undefined ? statusWeight[a.status] : 1;
            const bWeight = statusWeight[b.status] !== undefined ? statusWeight[b.status] : 1;
            return aWeight - bWeight;
        }
        return 0;
    });

    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / SIDEBAR_PAGE_SIZE);
    
    if (currentSidebarPage > totalPages) {
        currentSidebarPage = Math.max(1, totalPages);
    }
    
    const startIndex = (currentSidebarPage - 1) * SIDEBAR_PAGE_SIZE;
    const endIndex = Math.min(startIndex + SIDEBAR_PAGE_SIZE, totalItems);
    const paginatedItems = filtered.slice(startIndex, endIndex);

    proposalListEl.innerHTML = "";

    if (totalItems === 0) {
        proposalListEl.innerHTML = `<li class="sidebar-empty" style="text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 20px;">Không tìm thấy tờ trình nào</li>`;
        const paginationContainer = document.getElementById("sidebar-pagination");
        if (paginationContainer) {
            paginationContainer.innerHTML = "";
            paginationContainer.style.display = "none";
        }
        return;
    }

    paginatedItems.forEach((prop, index) => {
        const li = document.createElement("li");
        li.className = `proposal-item ${prop.id === activeProposalId ? "active" : ""}`;
        li.addEventListener("click", () => selectProposal(prop.id));

        const formattedDate = new Date(prop.createdAt).toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });

        let statusText = getVietnameseStatus(prop.status);
        const statusClass = prop.status === 'rejected' ? 'supplementing' : prop.status;

        let catBadgeText = prop.category === "ubkhcl" ? "UB KHCL" : "UB NS";
        let catBadgeClass = prop.category === "ubkhcl" ? "cat-ubkhcl" : "cat-ubns";

        const globalIndex = startIndex + index + 1;
        const sttText = globalIndex < 10 ? `0${globalIndex}` : globalIndex;

        li.innerHTML = `
            <div class="proposal-item-header">
                <span class="proposal-item-stt">${sttText}</span>
                <div class="proposal-item-title">${prop.title}</div>
            </div>
            <div class="proposal-item-meta">
                <span><i class="fa-regular fa-clock"></i> ${formattedDate}</span>
                <span class="proposal-category-badge ${catBadgeClass}">${catBadgeText}</span>
                <span class="proposal-badge badge-${statusClass}">${statusText}</span>
            </div>
        `;
        proposalListEl.appendChild(li);
    });

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const paginationContainer = document.getElementById("sidebar-pagination");
    if (!paginationContainer) return;

    if (totalPages <= 1) {
        paginationContainer.innerHTML = "";
        paginationContainer.style.display = "none";
        return;
    }

    paginationContainer.style.display = "flex";
    paginationContainer.innerHTML = `
        <button class="pagination-btn" id="pagination-prev" ${currentSidebarPage === 1 ? 'disabled' : ''}>
            <i class="fa-solid fa-chevron-left"></i>
        </button>
        <span class="pagination-info">${currentSidebarPage} / ${totalPages}</span>
        <button class="pagination-btn" id="pagination-next" ${currentSidebarPage === totalPages ? 'disabled' : ''}>
            <i class="fa-solid fa-chevron-right"></i>
        </button>
    `;

    document.getElementById("pagination-prev").addEventListener("click", (e) => {
        e.stopPropagation();
        if (currentSidebarPage > 1) {
            currentSidebarPage--;
            renderSidebar();
        }
    });

    document.getElementById("pagination-next").addEventListener("click", (e) => {
        e.stopPropagation();
        if (currentSidebarPage < totalPages) {
            currentSidebarPage++;
            renderSidebar();
        }
    });
}

function selectProposal(id) {
    activeProposalId = id;
    renderSidebar();
    renderActiveProposal(true); // Fit map tree on select
}

function updateUIForNoActiveProposal() {
    activeProposalInfoEl.innerHTML = `
        <div class="placeholder-info">
            <h2>Vui lòng chọn hoặc tạo mới một Tờ trình để xem tiến độ</h2>
            <p>Hệ thống hỗ trợ quản lý tiến độ xử lý tờ trình dạng sơ đồ tư duy trực quan.</p>
        </div>
    `;
    headerActionsEl.style.display = "none";
    canvasContainerEl.style.display = "none";
    emptyStateEl.style.display = "flex";
}

// Active Proposal Render & Connections
function renderActiveProposal(fitToScreen = true) {
    const proposal = proposals.find(p => p.id === activeProposalId);
    if (!proposal) {
        updateUIForNoActiveProposal();
        return;
    }

    // Update Header Info
    const formattedDate = new Date(proposal.createdAt).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

    let catText = proposal.category === "ubkhcl" ? "Ủy ban Kế hoạch Chiến lược (UB KHCL)" : "Ủy ban Nhân sự (UB NS)";
    let catClass = proposal.category === "ubkhcl" ? "cat-ubkhcl" : "cat-ubns";

    const tempBadge = proposal.isTemp ? `<span class="proposal-badge" style="background-color: rgba(245, 158, 11, 0.15); color: var(--color-warning); border: 1px solid rgba(245, 158, 11, 0.3);"><i class="fa-solid fa-eye"></i> Xem Tạm Thời</span>` : '';

    activeProposalInfoEl.innerHTML = `
        <h2>${proposal.title}</h2>
        <div class="active-proposal-meta">
            ${tempBadge}
            <span><i class="fa-regular fa-user"></i> Người tạo: <strong>${proposal.creator}</strong> (${proposal.dept || "Không xác định"})</span>
            <span><i class="fa-regular fa-calendar"></i> Tạo lúc: ${formattedDate}</span>
            <span><i class="fa-solid fa-tag"></i> Ủy ban: <span class="proposal-category-badge ${catClass}">${catText}</span></span>
            <span><i class="fa-solid fa-list-check"></i> Trạng thái: <span class="proposal-badge badge-${proposal.status === 'rejected' ? 'supplementing' : proposal.status}">${getVietnameseStatus(proposal.status)}</span></span>
        </div>
    `;

    headerActionsEl.style.display = "block";
    canvasContainerEl.style.display = "flex";
    emptyStateEl.style.display = "none";

    // Clear Canvas and Tree
    svgCanvasEl.innerHTML = "";
    // Recreate SVG defs since we cleared SVG
    svgCanvasEl.innerHTML = `
        <defs>
            <marker id="arrow-completed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--color-success)" />
            </marker>
            <marker id="arrow-processed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--color-processed)" />
            </marker>
            <marker id="arrow-in-progress" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--color-primary)" />
            </marker>
            <marker id="arrow-pending" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--color-neutral)" />
            </marker>
            <marker id="arrow-supplementing" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--color-supplementing)" />
            </marker>
            <marker id="arrow-rejected" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--color-danger)" />
            </marker>
        </defs>
    `;
    mindmapTreeEl.innerHTML = "";

    // Render nodes absolutely positioned on the canvas
    if (proposal.nodes) {
        proposal.nodes.forEach(node => {
            const cardEl = buildNodeDOM(node, proposal);
            mindmapTreeEl.appendChild(cardEl);
        });
    }

    // Wait for the DOM to render positions
    setTimeout(() => {
        resizeAllCommentTextareas(); // 1. Expand textareas first!
        drawConnections();            // 2. Then draw connections using the updated heights!
        
        // Observe cards size changes for connection line redraws
        if (nodeResizeObserver) {
            nodeResizeObserver.disconnect();
            const nodes = mindmapTreeEl.querySelectorAll(".mindmap-node");
            nodes.forEach(nodeEl => nodeResizeObserver.observe(nodeEl));
        }

        if (fitToScreen) {
            zoomFit();
        }
    }, 60);
}

function getVietnameseStatus(status) {
    switch(status) {
        case "completed": return "Đã hoàn thiện";
        case "in-progress": return "Đang xử lý";
        case "processed": return "Đã xử lý";
        case "supplementing": return "Chờ bổ sung";
        case "rejected": return "Chờ bổ sung"; // fallback compatibility
        default: return "Chờ xử lý";
    }
}

// Builds a single absolutely positioned node card for the graph
function buildNodeDOM(node, proposal) {
    const isRoot = proposal.nodes[0] && proposal.nodes[0].id === node.id;

    // Node Box HTML
    const nodeBox = document.createElement("div");
    nodeBox.className = `mindmap-node ${isRoot ? 'node-root' : `node-${node.status}`}`;
    nodeBox.setAttribute("data-id", node.id);
    
    // Position absolute using graph coordinates
    nodeBox.style.left = `${node.x || 50}px`;
    nodeBox.style.top = `${node.y || 120}px`;

    // Node styling and setup
    let statusIcon = "fa-circle-question";
    let statusText = "Chờ xử lý";
    let statusClass = "badge-pending";

    if (node.status === "completed") {
        statusIcon = "fa-circle-check text-success";
        statusText = "Đã hoàn thiện";
        statusClass = "badge-completed";
    }
    if (node.status === "in-progress") {
        statusIcon = "fa-spinner fa-spin text-primary";
        statusText = "Đang xử lý";
        statusClass = "badge-in-progress";
    }
    if (node.status === "processed") {
        statusIcon = "fa-circle-check text-info";
        statusText = "Đã xử lý";
        statusClass = "badge-processed";
    }
    if (node.status === "supplementing" || node.status === "rejected") {
        statusIcon = "fa-circle-exclamation text-warning";
        statusText = "Chờ bổ sung";
        statusClass = "badge-supplementing";
    }
    if (node.status === "pending") {
        statusIcon = "fa-circle-notch";
        statusText = "Chờ xử lý";
        statusClass = "badge-pending";
    }

    const finalStepBadge = node.isFinal ? `<span class="proposal-badge" style="background-color: rgba(139, 92, 246, 0.15); color: #a78bfa; border: 1px solid rgba(139, 92, 246, 0.3);"><i class="fa-solid fa-flag-checkered"></i> Bước cuối</span>` : '';

    const metaRowHTML = `
        <div class="node-meta-row" onclick="event.stopPropagation();">
            ${node.user ? `<span class="node-user-meta"><i class="fa-regular fa-user"></i> ${node.user}</span>` : '<span></span>'}
            <div style="display: flex; gap: 6px; align-items: center;">
                ${finalStepBadge}
                <span class="proposal-badge ${statusClass}">${statusText}</span>
            </div>
        </div>
    `;
    
    // Directly editable comment textarea with dynamic height expand on load/input
    const commentHTML = `
        <textarea class="node-comment-input" data-id="${node.id}" placeholder="Ý kiến / Bình luận..." oninput="window.autoResizeTextarea(this); drawConnections();" onchange="updateCommentInPlace(this)" onclick="event.stopPropagation();" onmousedown="event.stopPropagation();">${node.comment || ''}</textarea>
    `;
    
    // Display custom Link Text if specified, otherwise fall back to Domain Name
    const linkText = node.linkLabel ? node.linkLabel : getDomainName(node.link);
    const linkHTML = node.link ? `
        <div class="node-link" onclick="event.stopPropagation();" onmousedown="event.stopPropagation();">
            <i class="fa-solid fa-link text-primary"></i> 
            <a href="${node.link}" target="_blank" title="${node.link}">${linkText}</a>
        </div>
    ` : '';

    nodeBox.innerHTML = `
        <div class="node-header">
            <span class="node-label">
                <i class="fa-solid fa-grip-vertical node-grip" title="Kéo thả để di chuyển"></i>
                <i class="fa-solid ${statusIcon}"></i> ${node.label}
            </span>
            <div class="node-actions">
                <button class="node-btn node-btn-add" title="Rẽ nhánh thêm bước sau bước này" onclick="event.stopPropagation(); openAddSubnodeModal('${node.id}')">
                    <i class="fa-solid fa-plus"></i>
                </button>
                <button class="node-btn node-btn-edit" title="Cập nhật thông tin bước này" onclick="event.stopPropagation(); openEditNodeModal('${node.id}')">
                    <i class="fa-solid fa-pencil"></i>
                </button>
                ${!isRoot ? `
                <button class="node-btn node-btn-delete" title="Xóa bước này" onclick="event.stopPropagation(); deleteNodeInActiveProposal('${node.id}')">
                    <i class="fa-solid fa-trash"></i>
                </button>` : ''}
            </div>
        </div>
        ${metaRowHTML}
        ${commentHTML}
        ${linkHTML}
    `;

    // Handle Node Drag & Drop events
    nodeBox.addEventListener("mousedown", (e) => {
        // Skip drag if clicking on buttons, links or textareas
        if (e.target.closest("button") || e.target.closest("a") || e.target.closest("textarea") || e.target.closest("input")) {
            return;
        }

        // Drag is only allowed when grabbing the grip handle or the header
        if (!e.target.closest(".node-grip") && !e.target.closest(".node-header")) {
            return;
        }

        e.stopPropagation(); // Stop event propagation so it won't pan the canvas viewport!
        if (e.button !== 0) return; // Only left click drag

        isDraggingNode = true;
        draggedNodeId = node.id;
        nodeDragStartX = e.clientX;
        nodeDragStartY = e.clientY;
        nodeInitX = node.x || 50;
        nodeInitY = node.y || 120;

        document.body.style.cursor = "move";
    });

    return nodeBox;
}

function getDomainName(url) {
    try {
        const domain = new URL(url).hostname;
        return domain.replace('www.', '') || "Liên kết đính kèm";
    } catch (e) {
        return "Tài liệu đính kèm";
    }
}

function populateParentsCheckboxes(containerEl, excludeNodeId = null) {
    const proposal = proposals.find(p => p.id === activeProposalId);
    if (!proposal || !proposal.nodes) return;
    
    containerEl.innerHTML = "";
    
    // The root node (first node) has no parents, and other nodes cannot connect back to root as a child (to maintain general flow direction, though they can if desired. Let's list all nodes except itself).
    proposal.nodes.forEach(node => {
        if (node.id === excludeNodeId) return;
        
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.gap = "8px";
        
        let isChecked = false;
        if (excludeNodeId) {
            isChecked = proposal.links.some(l => l.from === node.id && l.to === excludeNodeId);
        }
        
        div.innerHTML = `
            <input type="checkbox" id="parent-chk-${node.id}" value="${node.id}" class="parent-node-chk" ${isChecked ? 'checked' : ''} style="width: auto; cursor: pointer; margin: 0;">
            <label for="parent-chk-${node.id}" style="cursor: pointer; font-size: 0.85rem; margin-bottom: 0; user-select: none;">${node.label} (${getVietnameseStatus(node.status)})</label>
        `;
        containerEl.appendChild(div);
    });
}

// Modal Form Openers
window.openEditNodeModal = function(nodeId) {
    const proposal = proposals.find(p => p.id === activeProposalId);
    if (!proposal || !proposal.nodes) return;

    const node = proposal.nodes.find(n => n.id === nodeId);
    if (!node) return;

    document.getElementById("edit-node-id").value = node.id;
    document.getElementById("node-label").value = node.label;
    document.getElementById("node-user").value = node.user || "";
    document.getElementById("node-status").value = node.status;
    document.getElementById("node-comment").value = node.comment || "";
    document.getElementById("node-link").value = node.link || "";
    document.getElementById("node-link-label").value = node.linkLabel || ""; // populate label
    document.getElementById("node-is-final").checked = !!node.isFinal; // populate isFinal

    const isRoot = proposal.nodes[0] && proposal.nodes[0].id === nodeId;
    document.getElementById("node-modal-title").textContent = 
        isRoot ? "Cập Nhật Thông Tin Tờ Trình" : "Cập Nhật Bước Xử Lý";

    // Hide parents checkbox list for the root node (first node has no parents)
    const parentsContainer = document.getElementById("edit-node-parents");
    const parentsWrapper = document.getElementById("node-parents-container");
    if (isRoot) {
        parentsWrapper.style.display = "none";
    } else {
        parentsWrapper.style.display = "block";
        populateParentsCheckboxes(parentsContainer, nodeId);
    }

    openModal(modalNode);
}

window.openAddSubnodeModal = function(parentId) {
    document.getElementById("parent-node-id").value = parentId || "";
    document.getElementById("subnode-label").value = "";
    document.getElementById("subnode-user").value = "";
    document.getElementById("subnode-status").value = "pending";
    document.getElementById("subnode-comment").value = "";
    document.getElementById("subnode-link").value = "";
    document.getElementById("subnode-link-label").value = "";
    document.getElementById("subnode-is-final").checked = false; // reset isFinal

    // Populate parents checklist
    const parentsContainer = document.getElementById("add-node-parents");
    populateParentsCheckboxes(parentsContainer, null);

    // Pre-check parent if provided
    if (parentId) {
        const chk = parentsContainer.querySelector(`#parent-chk-${parentId}`);
        if (chk) chk.checked = true;
    }

    openModal(modalSubnode);
}

// Helper to get local offset relative to map-content taking drags into account
function getNodeOffsets(nodeEl, nodeObj) {
    let top = nodeEl.offsetTop;
    let left = nodeEl.offsetLeft;
    const width = nodeEl.offsetWidth;
    const height = nodeEl.offsetHeight;

    // Traverse offsetParents up to map-content to sum padding offsets
    let parent = nodeEl.offsetParent;
    while (parent && parent.id !== "map-content") {
        top += parent.offsetTop;
        left += parent.offsetLeft;
        parent = parent.offsetParent;
    }

    return { left, top, width, height };
}

// SVG Connection Path Drawing with Arrowhead markers
function drawConnections() {
    const proposal = proposals.find(p => p.id === activeProposalId);
    if (!proposal || !proposal.nodes) return;

    // Canvas size matches map-content layout bounds
    const contentWidth = mapContentEl.scrollWidth;
    const contentHeight = mapContentEl.scrollHeight;
    svgCanvasEl.setAttribute("width", contentWidth);
    svgCanvasEl.setAttribute("height", contentHeight);

    // Keep markers defs, clear only connection paths
    const paths = svgCanvasEl.querySelectorAll("path.connection-line");
    paths.forEach(p => p.remove());

    if (proposal.links) {
        proposal.links.forEach(link => {
            const parentNode = proposal.nodes.find(n => n.id === link.from);
            const childNode = proposal.nodes.find(n => n.id === link.to);
            if (!parentNode || !childNode) return;

            const parentEl = mindmapTreeEl.querySelector(`[data-id="${link.from}"]`);
            const childEl = mindmapTreeEl.querySelector(`[data-id="${link.to}"]`);
            if (!parentEl || !childEl) return;

            const pOffset = getNodeOffsets(parentEl, parentNode);
            const cOffset = getNodeOffsets(childEl, childNode);

            // Right side center of parent
            const x1 = pOffset.left + pOffset.width;
            const y1 = pOffset.top + (pOffset.height / 2);

            // Left side center of child
            const x2 = cOffset.left;
            const y2 = cOffset.top + (cOffset.height / 2);

            // Shorten line ending by 6px so arrowhead points cleanly at child border
            const x2Adjusted = x2 - 6;

            // Smooth cubic bezier curves
            const controlDist = Math.abs(x2Adjusted - x1) * 0.45;
            const pathData = `M ${x1} ${y1} C ${x1 + controlDist} ${y1}, ${x2Adjusted - controlDist} ${y2}, ${x2Adjusted} ${y2}`;

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pathData);
            path.setAttribute('class', `connection-line line-${childNode.status}`);
            
            // Attach state-specific arrowhead markers
            path.setAttribute('marker-end', `url(#arrow-${childNode.status})`);
            
            svgCanvasEl.appendChild(path);
        });
    }
}
