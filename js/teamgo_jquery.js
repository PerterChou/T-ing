const valueOfChina =['你好吖~ ^_^','初めまして、^o^','よろしくお願いいたします! O_O','富强','民主','文明','和谐','おはよう～　^0^','自由','平等','公正','法治','こんにちは～　^.^','爱国','敬业','诚信','友善','こんばんは～　=.=','我累了...','注意休息呀~','工作你就输了!','可愛いは正義だ　>_<','おやすみ～　😴'];
var clickNum = 0;
const projectCard = " <div class=\"card-container\"><div class=\"outer\"><div class=\"container\"><div class=\"container-content\"><div class=\"container-content-header\"></div><div class=\"container-content-footer\"><div class=\"project-name\">新建项目</div></div></div></div></div></div>";
const TSBoard = ["<div class=\"modal fade in\" style=\"\">",
"				<div class=\"modal-board fade in\"></div>",
"				<div class=\"object-modal-view\">",
"					<div class=\"modal-view\">",
"						<div class=\"modal-body\">",
"							<div class=\"modal-container\">",
"								<div class=\"content\">",
"									<div class=\"board-head\">",
"										<div class=\"board-head-wrap\">",
"											<div class=\"board-type\">",
"												<div class=\"board-type-icon\"></div>",
"												<span class=\"board-type-name\">任务</span>",
"											</div>",
"										</div>",
"										<div class=\"head-detail\">",
"											<div class=\"head-detail-wrap\">",
"												<div class=\"closeBoardBtn\"><svg t=\"1600140476845\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"",
"													 p-id=\"2714\" width=\"16\" height=\"16\">",
"														<path d=\"M574.55 522.35L904.4 192.5c16.65-16.65 16.65-44.1 0-60.75l-1.8-1.8c-16.65-16.65-44.1-16.65-60.75 0L512 460.25l-329.85-330.3c-16.65-16.65-44.1-16.65-60.75 0l-1.8 1.8c-17.1 16.65-17.1 44.1 0 60.75l329.85 329.85L119.6 852.2c-16.65 16.65-16.65 44.1 0 60.75l1.8 1.8c16.65 16.65 44.1 16.65 60.75 0L512 584.9l329.85 329.85c16.65 16.65 44.1 16.65 60.75 0l1.8-1.8c16.65-16.65 16.65-44.1 0-60.75L574.55 522.35z\"",
"														 p-id=\"2715\"></path>",
"													</svg></div>",
"											</div>",
"										</div>",
"									</div>",
"									<div class=\"board-detail-body\">",
"										<div class=\"body-inner\">",
"											<div class=\"sub-board1\">",
"												<div class=\"sub-inner\">",
"													<div class=\"object-title\">",
"														<div class=\"object-title-wrap\">",
"															<div class=\"object-title-editor\" data-id data-role=\"objectName\" placeholder=\"任务名\" spellcheck=\"false\" contenteditable=\"true\" value=\"\"></div>",
"														</div>",
"													</div>",
"													<div class=\"object-detail-body\">",
"														<div class=\"basic-details-view\">",
"															<div class=\"object-detail\" id=\"object-status\">",
"																<div class=\"object-detail-left\">",
"																	<span class=\"object-detail-icon\"><svg t=\"1600149905129\" class=\"icon\" viewBox=\"0 0 1099 1024\" version=\"1.1\"",
"																		 xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3476\" width=\"20\" height=\"20\">",
"																			<path d=\"M805.56 253c-28.7 0-52 23.3-52 52 0 9.6 2.6 18.6 7.1 26.2L613.16 538.7c-3.3-0.7-6.7-1-10.1-1-10.4 0-20.2 3.1-28.3 8.4l-103.1-66.3c0-0.4 0-0.9 0-1.3 0-28.7-23.3-52-52-52-28.7 0-52 23.3-52 52 0 8.1 1.8 15.8 5.2 22.7L270.46 657c-2.7-0.4-5.5-0.7-8.3-0.7-28.7 0-52 23.3-52 52 0 28.7 23.3 52 52 52s52-23.3 52-52c0-10.3-3-19.8-8.1-27.9l100-151.9c4.4 1.2 9 1.8 13.8 1.8 12.6 0 24.2-4.5 33.2-12l98.8 63.5c-0.4 2.5-0.6 5.1-0.6 7.7 0 28.7 23.3 52 52 52s52-23.3 52-52c0-9.6-2.6-18.6-7.1-26.2l147.6-207.5c3.3 0.7 6.7 1 10.1 1 28.7 0 52-23.3 52-52S834.26 253 805.56 253z\"",
"																			 p-id=\"3477\"></path>",
"																		</svg></span>",
"																	<span class=\"object-detail-name\">状态</span>",
"																</div>",
"																<div class=\"object-detail-right\" data-role=\"status\">",
"																	<div style=\"position: relative;\">",
"																		<div class=\"status-button\" data-status=\"todo\" >",
"																			<span class=\"select-box\"></span>",
"																			<span class=\"status-name\">待处理</span>",
"																		</div>",
"																	</div>",
"																</div>",
"															</div>",
"															<div class=\"object-detail\" id=\"object-time\">",
"																<div class=\"object-detail-left\">",
"																	<span class=\"object-detail-icon\"><svg t=\"1600154947406\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\"",
"																		 xmlns=\"http://www.w3.org/2000/svg\" p-id=\"5262\" width=\"20\" height=\"20\">",
"																			<path d=\"M512.256 960.256C264.833024 960.256 64.257024 759.678976 64.257024 512.256 64.257024 264.833024 264.833024 64.256 512.256 64.256 759.678976 64.256 960.254976 264.833024 960.254976 512.256 960.254976 759.678976 759.678976 960.256 512.256 960.256ZM150.41024 495.025152 115.949568 495.025152C106.433536 495.025152 98.717696 502.739968 98.717696 512.256 98.717696 521.772032 106.433536 529.486848 115.949568 529.486848L150.41024 529.486848C159.927296 529.486848 167.641088 521.772032 167.641088 512.256 167.641088 502.739968 159.927296 495.025152 150.41024 495.025152ZM495.025152 908.563456C495.025152 918.079488 502.738944 925.794304 512.256 925.794304 521.772032 925.794304 529.486848 918.079488 529.486848 908.563456L529.486848 874.10176C529.486848 864.585728 521.772032 856.870912 512.256 856.870912 502.738944 856.870912 495.025152 864.585728 495.025152 874.10176L495.025152 908.563456ZM529.486848 115.948544C529.486848 106.432512 521.772032 98.71872 512.256 98.71872 502.738944 98.71872 495.025152 106.432512 495.025152 115.948544L495.025152 150.41024C495.025152 159.926272 502.738944 167.641088 512.256 167.641088 521.772032 167.641088 529.486848 159.926272 529.486848 150.41024L529.486848 115.948544ZM529.486848 526.923776 529.486848 288.256C529.486848 278.739968 521.772032 271.026176 512.256 271.026176 502.738944 271.026176 495.025152 278.739968 495.025152 288.256L495.025152 522.059776 241.229824 775.384064C234.425344 782.175232 234.425344 793.187328 241.229824 799.978496 248.03328 806.769664 259.065856 806.769664 265.869312 799.978496L524.587008 541.741056C528.632832 537.701376 530.2528 532.171776 529.486848 526.923776ZM908.563456 495.025152 874.10176 495.025152C864.584704 495.025152 856.870912 502.739968 856.870912 512.256 856.870912 521.772032 864.584704 529.486848 874.10176 529.486848L908.563456 529.486848C918.079488 529.486848 925.79328 521.772032 925.79328 512.256 925.79328 502.739968 918.079488 495.025152 908.563456 495.025152Z\"",
"																			 p-id=\"5263\"></path>",
"																		</svg></span>",
"																	<span class=\"object-detail-name\">时间</span>",
"																</div>",
"																<div class=\"object-detail-right\">",
"																	<div class=\"task-date-wrap\">",
"																		<div class=\"task-date-start\">",
"																			<div class=\"date-wrap\">",
"																				<div class=\"date-text\">开始时间</div> <input class=\"datetime-set\" id=\"startDate\" data-role=\"startTime\" type=\"text\">",
"																			</div>",
"																		</div>",
"																		<div class=\"task-date-end\">",
"																			<div class=\"date-wrap\">",
"																				<div class=\"date-text\">截止时间</div> <input class=\"datetime-set\" id=\"endDate\" data-role=\"endTime\" type=\"text\">",
"																			</div>",
"																		</div>",
"																	</div>",
"																</div>",
"															</div>",
"															<div class=\"object-detail\" id=\"object-involver\">",
"																<div class=\"object-detail-left\">",
"																	<span class=\"object-detail-icon\"><svg t=\"1600170801098\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\"",
"																		 xmlns=\"http://www.w3.org/2000/svg\" p-id=\"4296\" width=\"20\" height=\"20\">",
"																			<path d=\"M196.608 348.16h206.336l65.024 120.832 62.464 75.776L660.992 348.16H890.88l69.632 198.656-30.72 106.496-39.936-1.024 10.752-90.624-26.112-68.608-5.12 158.208-32.768 299.52H783.36l-3.584-274.432h-30.208l-50.688 275.968h-59.392l18.432-301.568V501.76l-131.584 112.64-102.912-73.216-3.584 110.08-34.816 301.568H325.12v-275.968h-30.208L240.64 950.784H187.392l20.48-299.52-5.12-137.216-77.312 93.184v40.448h25.088v207.872H69.632v-207.872h25.088v-41.984l-17.92-7.68L196.608 348.16z m607.744-225.28c-47.104-28.672-108.544-13.312-137.216 33.792-28.672 47.104-13.312 108.544 33.792 137.216s108.544 13.312 137.216-33.792c28.672-47.104 13.312-108.544-33.792-137.216zM256 122.88c47.104-28.672 108.544-13.312 137.216 33.792 28.672 47.104 13.312 108.544-33.792 137.216S250.88 307.2 222.208 260.096C194.048 212.992 208.896 151.552 256 122.88z\"",
"																			 fill=\"#231815\" p-id=\"4297\"></path>",
"																		</svg></span>",
"																	<span class=\"object-detail-name\">参与者</span>",
"																</div>",
"																<div class=\"object-detail-right\">",
"																	<div class=\"member-involve\">",
"																		<ul class=\"member-involve-list\">",
"																			<div>",
"																				<button class=\"mybutton add-handler\" data-something=\"involver\" data-role=\"person\">+</button>",
"																			</div>",
"																		</ul>",
"																	</div>",
"																</div>",
"															</div>",
"														</div>",
"														<div class=\"project-info\">",
"															<div class=\"object-detail\">",
"																<div class=\"object-detail-left\">",
"																	<span class=\"object-detail-icon\"><svg t=\"1600169470609\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\"",
"																		 xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2757\" width=\"20\" height=\"20\">",
"																			<path d=\"M896 896l-45.44-45.12A63.808 63.808 0 0 1 896 832a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64v5.44c0 17.6-7.04 33.536-18.56 45.12L128 133.44V128A128 128 0 0 1 256 0h640a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128zM64 256v640a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H128a64 64 0 0 0-64 64z m704-128a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H128A128 128 0 0 1 0 896V256a128 128 0 0 1 128-128h640z\"",
"																			 p-id=\"2758\"></path>",
"																			<path d=\"M160 256h384a32 32 0 0 1 0 64H160a32 32 0 0 1 0-64z m576 64a32 32 0 1 1 0-64 32 32 0 0 1 0 64zM64 384h768v64H64v-64z\"",
"																			 p-id=\"2759\"></path>",
"																		</svg></span>",
"																	<span class=\"object-detail-name\" data-role=\"project\">项目</span>",
"																</div>",
"																<div class=\"object-detail-right\">",
"																	<div class=\"stage-selector-wrap\">",
"																		<div class=\"task-location-handler selector\">",
"																			",
"																			<div class=\"task-location-text\"><span class=\"mybutton\" data-something=\"project\" data-role=\"project\">项目</span></div>",
"																		</div>",
"																	</div>",
"																</div>",
"															</div>",
"														</div>",
"														<div class=\"other-info\">",
"															<div class=\"other-info-wrap\">",
"																<div class=\"other-info-aside\">",
"																	<span class=\"object-detail-icon\"><svg t=\"1600170506401\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\"",
"																		 xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3386\" width=\"20\" height=\"20\">",
"																			<path d=\"M863.418182 297.890909l-132.654546-132.654545 109.381819-109.381819 132.654545 132.654546-109.381818 109.381818z m-65.163637-132.654545l65.163637 65.163636 41.890909-41.890909-65.163636-65.163636-41.89091 41.890909z\"",
"																			 fill=\"#424752\" p-id=\"3387\"></path>",
"																			<path d=\"M523.636364 505.018182l39.563636-172.218182 202.472727-202.472727 130.327273 132.654545-202.472727 202.472727-169.890909 39.563637z m158.254545-60.509091zM605.090909 358.4l-20.945454 83.781818 86.10909-20.945454 160.581819-158.254546-65.163637-67.490909-160.581818 162.909091z\"",
"																			 fill=\"#424752\" p-id=\"3388\"></path>",
"																			<path d=\"M930.909091 930.909091H93.090909V93.090909h581.818182v46.545455H139.636364v744.727272h744.727272V349.090909h46.545455z\"",
"																			 fill=\"#424752\" p-id=\"3389\"></path>",
"																			<path d=\"M186.181818 279.272727h302.545455v46.545455H186.181818zM186.181818 418.909091h302.545455v46.545454H186.181818zM186.181818 558.545455h651.636364v46.545454H186.181818z\"",
"																			 fill=\"#424752\" p-id=\"3390\"></path>",
"																			<path d=\"M186.181818 698.181818h651.636364v46.545455H186.181818z\" fill=\"#424752\" p-id=\"3391\"></path>",
"																		</svg></span>",
"																	<span class=\"object-detail-name\">详情</span>",
"																</div>",
"																<div class=\"more-info\" data-role=\"info\" title=\"点击可编辑\">",
"																	<div class=\"add-info-before\">",
"																		<div class=\"add-info-handler\">暂时为空</div>",
"																	</div>",
"																	<div class=\"add-info-now\">",
"																		<moreinfo></moreinfo>",
"																	</div>",
"																	<div class=\"add-info-after\">",
"																		<div class=\"add-info-text\"></div>",
"																	</div>",
"																</div>",
"																",
"															</div>",
"														</div>",
"													</div>",
"												</div>",
"											</div>",
"										</div>",
"									</div>",
"								</div>",
"							</div>",
"						</div>",
"					</div>",
"				</div>",
"			</div>"].join("");
const taskBoard = [
"				<div class=\"project-board\">",
"					<div class=\"project-board-view\">",
"						<div class=\"project-board-wrap\">",
"							<div class=\"content\">",
"								<div class=\"project-board-body\">",
"									<div class=\"body-wrap\">",
"										<div class=\"task-list-view\" data-task=\"todo\">",
"											<div class=\"list-content\">",
"												<div class=\"status-name\">",
"													<div class=\"status-name-wrap\">",
"														<div class=\"title-list\">",
"															<span class=\"title-name\">待处理</span>",
"															<span class=\"title-num\"></span>",
"														</div>",
"													</div>",
"												</div>",
"												<div class=\"task-list-body\">",
"													<div class=\"task-list-body-list\">",
"														<div class=\"task-list-body-card\">",
"														</div>",
"													</div>",
"												</div>",
"											</div>",
"										</div>",
"										<div class=\"task-list-view\" data-task=\"doing\">",
"											<div class=\"list-content\">",
"												<div class=\"status-name\">",
"													<div class=\"status-name-wrap\">",
"														<div class=\"title-list\">",
"															<span class=\"title-name\">处理中</span>",
"															<span class=\"title-num\"></span>",
"														</div>",
"													</div>",
"												</div>",
"												<div class=\"task-list-body\">",
"													<div class=\"task-list-body-list\">",
"														<div class=\"task-list-body-card\">",
"														</div>",
"													</div>",
"												</div>",
"											</div>",
"										</div>",
"										<div class=\"task-list-view\" data-task=\"checking\">",
"											<div class=\"list-content\">",
"												<div class=\"status-name\">",
"													<div class=\"status-name-wrap\">",
"														<div class=\"title-list\">",
"															<span class=\"title-name\">审核中</span>",
"															<span class=\"title-num\"></span>",
"														</div>",
"													</div>",
"												</div>",
"												<div class=\"task-list-body\">",
"													<div class=\"task-list-body-list\">",
"														<div class=\"task-list-body-card\">",	
"														</div>",
"													</div>",
"												</div>",
"											</div>",
"										</div>",
"										<div class=\"task-list-view\" data-task=\"done\">",
"											<div class=\"list-content\">",
"												<div class=\"status-name\">",
"													<div class=\"status-name-wrap\">",
"														<div class=\"title-list\">",
"															<span class=\"title-name\">已完成</span>",
"															<span class=\"title-num\"></span>",
"														</div>",
"													</div>",
"												</div>",
"												<div class=\"task-list-body\">",
"													<div class=\"task-list-body-list\">",
"														<div class=\"task-list-body-card\">",
"														</div>",
"													</div>",
"												</div>",
"											</div>",
"										</div>",
"									</div>",
"								</div>",
"							</div>",
"						</div>",
"					</div>",
"				</div>"].join("")




$(document).ready(function(){
	
	$('.menu-item').click(function(){
		var m=window.innerWidth-document.body.clientWidth;//滚动条的宽度
		document.documentElement.style.paddingRight=m+"px";
		var modal2 = ["<div class=\"modal fade in\" data-modal=\"modal2\">",
"			<div class=\"modal-board fade in\"></div>",
"			<div class=\"task-creator-view creator-view modal-dialog\">",
"				<header class=\"creator-header\">",
"					<h4 class=\"creator-title\">新建任务</h4>",
"					<div class=\"closeBoardBtn\" data-modal=\"modal2\"><svg t=\"1598885336572\" class=\"icon\" viewBox=\"0 0 1024 1024\"",
"						 version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2684\" width=\"20\" height=\"20\">",
"							<path d=\"M566.97558594 521.09667969L856.8828125 231.18945312c14.63378906-14.63378906 14.63378906-38.75976563 0-53.39355468l-1.58203125-1.58203125c-14.63378906-14.63378906-38.75976563-14.63378906-53.39355469 0L512 466.51660156 222.09277344 176.21386719c-14.63378906-14.63378906-38.75976563-14.63378906-53.39355469 0l-1.58203125 1.58203125c-15.02929688 14.63378906-15.02929688 38.75976563 0 53.39355469l289.90722656 289.90722656L167.1171875 811.00390625c-14.63378906 14.63378906-14.63378906 38.75976563 0 53.39355469l1.58203125 1.58203125c14.63378906 14.63378906 38.75976563 14.63378906 53.39355469 0L512 576.07226563 801.90722656 865.97949219c14.63378906 14.63378906 38.75976563 14.63378906 53.39355469 0l1.58203125-1.58203125c14.63378906-14.63378906 14.63378906-38.75976563 0-53.39355469L566.97558594 521.09667969z\"",
"							 fill=\"#363F4D\" p-id=\"2685\"></path>",
"						</svg></div>",
"				</header>",
"				<section class=\"creator-body\">",
"					<div class=\"creator-block task-creator-input\">",
"						<div class=\"editor\" contenteditable=\"true\" spellcheck=\"false\" placeholder=\"输入任务标题\" id=\"task-editor\"></div>",
"					</div>",
"					<div class=\"basic-attrs-wrap\">",
"						<div class=\"basic-attrs-view\">",
"							<div class=\"task-date-range\">",
"								<span class=\"task-date-range-icon icon\"><svg t=\"1598945732379\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\"",
"									 xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3418\" width=\"200\" height=\"200\">",
"										<path d=\"M896 345V233a8 8 0 0 0-8-8H738v45c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32v-45H350v45c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32v-45H136a8 8 0 0 0-8 8v112h768z m0 64H128v479a8 8 0 0 0 8 8h752a8 8 0 0 0 8-8V409zM738 161h190c17.673 0 32 14.327 32 32v735c0 17.673-14.327 32-32 32H96c-17.673 0-32-14.327-32-32V193c0-17.673 14.327-32 32-32h190V96c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v65h324V96c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v65zM289 473h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m0 128h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m0 128h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m194-256h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m0 128h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m0 128h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m194-256h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m0 128h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m0 128h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z\"",
"										 p-id=\"3419\"></path>",
"									</svg></span>",
"								<div class=\"task-date-wrap\">",
"									<div class=\"task-date-start\">",
"										<div class=\"date-wrap\">",
"											<div class=\"date-text\">开始时间</div>",
"											<input class=\"datetime-set\" id=\"startDate\" type=\"text\" />",
"										</div>",
"									</div>",
"									<div class=\"task-date-end\">",
"										<div class=\"date-wrap\">",
"											<div class=\"date-text\">截止时间</div>",
"											<input class=\"datetime-set\" id=\"endDate\" type=\"text\" />",
"										</div>",
"									</div>",
"								</div>",
"							</div>",
"						</div>",
"					</div>",
"					<div class=\"task-location-wrap\">",
"						<div class=\"stage-selector-wrap\">",
"							<div class=\"task-location-handler selector\">",
"								<div class=\"task-location-logo\" style=\"background-image: url(img/nullproject.png);\"></div>",
"								<div class=\"task-location-text\"><span class=\"mybutton\" data-something=\"project\">项目</span></div>",
"							</div>",
"						</div>",
"					</div>",
"					<div class=\"creator-involve\">",
"						<div class=\"member-involve\">",
"							<div class=\"member-involve-header\">",
"								<span>参与者:</span>",
"								<span style=\"\"></span>",
"							</div>",
"							<ul class=\"member-involve-list\">",
"								<div><button class=\"mybutton add-handler\" data-something=\"involver\">+</button></div>",
"							</ul>",
"						</div>",
"					</div>",
"				</section>",
"				<footer class=\"creator-footer\">",
"					<div class=\"btn-wrap\">",
"						<button class=\"btn\" disabled=\"disabled\" id=\"task-btn\">创建</button>",
"					</div>",
"				</footer>",
"			</div>",
"		</div>"].join("");
		var modal3 = ["<div class=\"modal fade in\" data-modal=\"modal3\">",
"			<div class=\"modal-board fade in\"></div>",
"			<div class=\"task-creator-view creator-view modal-dialog\">",
"				<header class=\"creator-header\">",
"					<h4 class=\"creator-title\">新建日程</h4>",
"					<div data-modal=\"modal3\" class=\"closeBoardBtn\"><svg t=\"1598885336572\" class=\"icon\" viewBox=\"0 0 1024 1024\"",
"						 version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2684\" width=\"20\" height=\"20\">",
"							<path d=\"M566.97558594 521.09667969L856.8828125 231.18945312c14.63378906-14.63378906 14.63378906-38.75976563 0-53.39355468l-1.58203125-1.58203125c-14.63378906-14.63378906-38.75976563-14.63378906-53.39355469 0L512 466.51660156 222.09277344 176.21386719c-14.63378906-14.63378906-38.75976563-14.63378906-53.39355469 0l-1.58203125 1.58203125c-15.02929688 14.63378906-15.02929688 38.75976563 0 53.39355469l289.90722656 289.90722656L167.1171875 811.00390625c-14.63378906 14.63378906-14.63378906 38.75976563 0 53.39355469l1.58203125 1.58203125c14.63378906 14.63378906 38.75976563 14.63378906 53.39355469 0L512 576.07226563 801.90722656 865.97949219c14.63378906 14.63378906 38.75976563 14.63378906 53.39355469 0l1.58203125-1.58203125c14.63378906-14.63378906 14.63378906-38.75976563 0-53.39355469L566.97558594 521.09667969z\"",
"							 fill=\"#363F4D\" p-id=\"2685\"></path>",
"						</svg></div>",
"				</header>",
"				<section class=\"creator-body\">",
"					<div class=\"creator-block task-creator-input\">",
"						<div class=\"editor\" contenteditable=\"true\" spellcheck=\"false\" placeholder=\"输入日程标题\"></div>",
"					</div>",
"					<div class=\"basic-attrs-wrap\">",
"						<div class=\"basic-attrs-view\">",
"							",
"							<div class=\"task-date-range\">",
"								<span class=\"task-date-range-icon icon\"><svg t=\"1598945732379\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\"",
"									 xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3418\" width=\"200\" height=\"200\">",
"										<path d=\"M896 345V233a8 8 0 0 0-8-8H738v45c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32v-45H350v45c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32v-45H136a8 8 0 0 0-8 8v112h768z m0 64H128v479a8 8 0 0 0 8 8h752a8 8 0 0 0 8-8V409zM738 161h190c17.673 0 32 14.327 32 32v735c0 17.673-14.327 32-32 32H96c-17.673 0-32-14.327-32-32V193c0-17.673 14.327-32 32-32h190V96c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v65h324V96c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v65zM289 473h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m0 128h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m0 128h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m194-256h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m0 128h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m0 128h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m194-256h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m0 128h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m0 128h58c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-58c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z\"",
"										 p-id=\"3419\"></path>",
"									</svg></span>",
"								<div class=\"task-date-wrap\">",
"									<div class=\"task-date-start\">",
"										<div class=\"date-wrap\">",
"											<div class=\"date-text\">开始时间</div>",
"											<input class=\"datetime-set\" id=\"startDate\" type=\"text\" />",
"		",
"										</div>",
"									</div>",
"		",
"									<div class=\"task-date-end\">",
"										<div class=\"date-wrap\">",
"											<div class=\"date-text\">截止时间</div>",
"											<input class=\"datetime-set\" id=\"endDate\" type=\"text\" />",
"										</div>",
"									</div>",
"								</div>",
"							</div>",
"						</div>",
"					</div>",
"					<div class=\"task-location-wrap\">",
"						<div class=\"stage-selector-wrap\">",
"							<div class=\"task-location-handler selector\">",
"								<div class=\"task-location-logo\" style=\"background-image: url(img/nullproject.png);\"></div>",
"								<div class=\"task-location-text\"><span class=\"mybutton\" data-something=\"project\">项目</span></div>",
"							</div>",
"						</div>",
"					</div>",
"					<div class=\"creator-involve\">",
"						<div class=\"member-involve\">",
"							<div class=\"member-involve-header\">",
"								<span>参与者:</span>",
"								<span style=\"\"></span>",
"							</div>",
"							<ul class=\"member-involve-list\">",
"								<div><button class=\"mybutton add-handler\" data-something=\"involver\">+</button></div>",
"							</ul>",
"						</div>",
"					</div>",
"				</section>",
"				<footer class=\"creator-footer\">",
"					<div class=\"btn-wrap\">",
"						<button class=\"btn\" onclick=\"test()\" disabled=\"disabled\" id=\"task-btn\">创建</button>",
"					</div>",
"				</footer>",
"			</div>",
"		</div>"].join("");
		var addmodal = $(this).data('modal');
	
		$("#addIn").append(eval(addmodal));
		//$('div[data-modal='+$(this).data('modal')+']').css("display","flex");
		
		$('.next-overlay-wrapper').hide();
		//document.getElementsByClassName("next-overlay-wrapper")[0].style.display = "none";
		document.documentElement.style.overflowY = 'hidden'; 
		document.documentElement.style.overflowX = 'hidden';
		
		$('.creator-header div[data-modal='+$(this).data('modal')+']').click(function(){
			$('div[data-modal='+$(this).data('modal')+']').remove();
			document.documentElement.style.overflowY = 'scroll';
			document.documentElement.style.paddingRight="0px";
		});
		
	});
	$(document).on("mouseover","li.navbar-detail-app,.avator-menu-item-item,.menu-item,.tabs-bar-item,.project-title,.task-info,.member-involve-list-item-name",function(){
		var div = $("#hello");
		div.show();
		div.css({
			'top':event.clientY+'px',
			'left':event.clientX+50+'px',
			'position':'absolute',
			'backgroundColor':'#ded0e5'
		});
		div.html($(this).text());
		
	   
	});
	$(document).on("mouseout","li.navbar-detail-app,.avator-menu-item-item,.menu-item,.tabs-bar-item,.project-title,.task-info,.member-involve-list-item-name",function(){
		$("#hello").hide();
	});

	$(".Leave *,#leave").mouseover(function(){

		var div = $("#hello");
		div.show();
		div.css({
			'top':event.clientY+'px',
			'left':event.clientX+50+'px',
			'position':'absolute',
			'backgroundColor':'#ded0e5'
		});
		div.html($("#saysomething").text());
		
	   
	});
	
	$(document).on("mouseover",".closeBoardBtn",function(){
		var div = $("#hello");
		div.show();
		div.css({
			'top':event.clientY+'px',
			'left':event.clientX+50+'px',
			'position':'absolute',
			'backgroundColor':'#ded0e5'
		});
		div.html('关闭');
	});
	$(document).on(("mouseout"),".closeBoardBtn",function(){
		$("#hello").hide();
	});

	$(".card-grid").on("mouseover",".card-container",function(){
		var div = $("#hello");
		div.show();
		div.css({
			'top':event.clientY+'px',
			'left':event.clientX+50+'px',
			'position':'absolute',
			'backgroundColor':'#ded0e5'
		});
		div.html($(this).text());
	});
	
	$(".card-grid").on("mouseout",".card-container",function(){
		$("#hello").hide();
	});
	$(".search-result-wrap").on("mouseover",".result-list-item",function(){
		var div = $("#hello");
		div.show();
		div.css({
			'top':event.clientY+'px',
			'left':event.clientX+50+'px',
			'position':'absolute',
			'backgroundColor':'#ded0e5'
		});
		div.html($(this).text());
	});
	$(".search-result-wrap").on("mouseout",".result-list-item",function(){
		$("#hello").hide();
	});
	
	function getcl(){
	 var arr = []//定义一个空的数组
	 i =0;//为while循环定义i的初始值
	 C = '0123456789ABCDEF';
	 //定义颜色代码的字符串
	 while(i++ < 6){//循环6次
	 x=Math.random()*16;
	 //取0-16之间的随机数给变量x
	 b=parseInt(x);//取0-16之前的整数给变量b
	 c=C.substr(b,1);
	 //由第b（0-16之间的整数）位开始取一个字符
	 arr.push(c);
	 //通过6次循环得到的随机位置取得的字符组合在一起把值给到arr这个数组
	 }
	 var cl = "#"+ arr.join('');
	 //去掉之前数组之间的逗号，前面再加一个井号，
	 //这样颜色随机的颜色代码就生成了，并且把颜色代码赋值给变量cl
	 return cl;//把cl的值返回给函数getcl()
	 }
	
	$("#web-content").click(function(){
		var div = $("#hello");
		var time = 800;
		div.show();
		div.css({
			'top':event.clientY-10+'px',
			'left':event.clientX-10+'px',
			'opacity':1,
			'position':'absolute',
			
			'backgroundColor':'#ded0e5'
			
			//'backgroundColor':getcl()
		});
		div.html(valueOfChina[clickNum]);
		if(valueOfChina[clickNum].length>=10){
			time = 1500;
		}else if(valueOfChina[clickNum].length>=3){
			time = 1200;
		}
		
		clickNum=(clickNum+1)%valueOfChina.length;
		
		div.animate({
			top:'-=20px',
			left:'-=20px'
		}).fadeOut(time);
		
	});
	
	$('.executor-name .mybutton').click(function(){
		
	});
	
	function showProjects(){
		$.ajax({
			type:"GET",
			url:"test/projectTest.json",
			dataType:"json",
			timeout:10000,
			cache:false,
			success:function(data){
				$(".card-grid").html("");
				$.each(data,function(i,n){
					var newCard = $("<div class=\"card-container\"><div class=\"outer\"><div class=\"container\"><div class=\"container-content\"><div class=\"container-content-header\"></div><div class=\"container-content-footer\"><div class=\"project-name\">"+n['projectName']+"</div></div></div></div></div></div>");
					
					//newCard.text(n['projectName']);
					
					$("#card").append(newCard);
				});
				$("#web-content").show();
			}
		});
	}
	
	$("li[data-app=project]").click(function(){
		showProjects();
	});
	var myVar;
	window.onload = function(){
		showProjects();
		myVar = setInterval(function(){
				showProjects();
			},10000);
			

	}
	
	$("#reflesh").click(function(){
		if(document.getElementById("reflesh").checked == true){
			clearInterval(myVar);
		}else{
			myVar = setInterval(function(){
				showProjects();
			},10000);
		}
	});
	
	/*
	var tasktextarea = document.getElementById("task-editor");
	tasktextarea.onkeyup = function() {
		var str = tasktextarea.innerText;
	
		var taskbtn = document.getElementById("task-btn");
		if (str.length > 0 && !str.match(/^[ ]*$/)) {
			taskbtn.removeAttribute("disabled");
		} else {
			taskbtn.setAttribute("disabled", "disabled");
		}
	}
	*/
   /*
	$(".editor").keyup(function(){
		var str = $(".editor").text();
		var taskbtn = document.getElementById("task-btn");
		if (str.length > 0 && !str.match(/^[ ]*$/)) {
			taskbtn.removeAttribute("disabled");
		} else {
			taskbtn.setAttribute("disabled", "disabled");
		}
	});
	*/
	$("#addIn").on("keyup",".editor",function(){
		var str = $(".editor").text();
		var taskbtn = document.getElementById("task-btn");
		if (str.length > 0 && !str.match(/^[ ]*$/)) {
			taskbtn.removeAttribute("disabled");
		} else {
			taskbtn.setAttribute("disabled", "disabled");
		}
	});
	
	function getItem(something){
		var datA = something;
		if(something=="involver"){
			datA = "member";
		}
		$.ajax({
			type:"GET",
			url:"test/"+datA+".json",
			dataType:"json",
			timeout:10000,
			cache:false,
			success:function(data){
				$(".member-section").html("");
				var name = (something=="member" || something=="involver")?"groupMemberName":something=="project"?"projectName":"none";
				var group = "groupName"
				$.each(data,function(i,n){

					var newPerson = "";
					$.each(n[datA],function(j,m){
						newPerson+= "<li class=\"member-list-item\"><span class=\"avator item-img-avator\" style=\"background-image:url(img/executor.png) ;\"></span><div class=\"item-content-wrap\"><div class=\"item-main\"><div class=\"item-name\">"+m[name]+"</div></div></div></li>";

						
					});
					var newGroup = $("<ul class=\"member-list\"><li class=\"select-group\"><div class=\"option-group-label\">"+n[group]+"</div><ul>"+newPerson+"</ul></li></ul>");
					$("div[data-something="+something+"] .member-section").append(newGroup);
				});
			
			}
		});
	}

	
	function stopBubble(e){
				    if(e && e.stopPropagation){
				      e.stopPropagation();  //w3c
					}else{
				      window.event.cancelBubble=true; //IE
				    }
				}
	var item;
	function CPos(x,y){
		this.x = x;
		this.y = y;
	}
	function getObjPos(aTarget){
		var target1 = aTarget;
		var pos = new CPos(target1.offset().left,target1.offset().top);
		target1 = target1.offsetParent();
		
		if(target1){
			pos.x +=target1.offset().left;
			pos.y += target1.offset().top;
			target1 = target1.offsetParent();
		}
		
		return pos;
	}
	function showBoard(obj,event){
		var tar = obj;
		/*
		pos = getObjPos(tar);
		console.log(pos);
		$("div[data-something="+tar.data("something")+"]").css({"left":pos.x-100,"top":pos.y-200});
		
		*/
		$("div[data-something="+tar.data("something")+"]").toggle();
	
		
		getItem(tar.data("something"));
		stopBubble(event);
		$(document).bind("click",function(e){
		var target = $(e.target); 
		if(target.closest(".aBoard").length == 0){ 
		$(".aBoard").hide(); 
		} 
		});
	}
	$(document).on("click",".mybutton",function(event){
		/*
	    $('div[data-something=' + $(this).data('something') + ']').toggle();
		//console.log($(this).data("something"));
		getItem($(this).data("something"));
		stopBubble(event);
		$(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest(".aBoard").length == 0){ 
		$(".aBoard").hide(); 
		} 
		});
		*/
	   showBoard($(this),event);
		item = $(this).data("something");
		$(document).on("click","div[data-something="+item+"]"+" .member-list-item",function(){
			//let cbtn = $("<span class='remove-btn'>x</span>");
			$("span[data-something="+item+"]").next().remove();
			
			$("span[data-something="+item+"]").after("<span class='remove-btn'>x</span>");
			$("span[data-something="+item+"]").text($(this).text());
		
			$(".aBoard").hide();
			
			console.log("item()="+item);
			
		});
		/*
		
		*/
	});
	$(document).on("click",".remove-btn",function(e){
		if(e.preventDefault){
		e.preventDefault();
		}else{
		window.event.returnValue == false;
		}
		
		var par = $(this).parent();
		var item1 = par.children(":first");
		var text1 = (item1.attr("data-something")=="project")?"项目":"执行者";
		par.empty();
		//console.log("hello");
		console.log(item1.attr("data-something"));
		par.html("<span class=\"mybutton\" data-something="+item1.attr("data-something")+">"+text1+"</span>");
	});
	$(document).on("click",function(){
		var logic = function( currentDateTime ){
			/*
			if (currentDateTime && currentDateTime.getDay() == 6){
				this.setOptions({
					minTime:'11:00'
				});
			}else
				this.setOptions({
					minTime:'8:00'
				});
				*/
		};
		$('.datetime-set').datetimepicker({
			onChangeDateTime:logic,
			onShow:logic,
			step:10
		});
		$.datetimepicker.setLocale('ch');
		
		
	});
	$(document).on("click","div[data-something=involver] .member-list-item",function(){
		$(".member-involve-list").append("<div class=\"member-involve-list-item\"><span class=\"member-involve-list-item-name\">"+$(this).text()+"</span><div class=\"remove-handler\"><svg t=\"1599740573340\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2573\" width=\"12\" height=\"12\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#878787\" p-id=\"2574\"></path><path d=\"M555.323077 512l185.107692-185.107692c11.815385-11.815385 11.815385-31.507692 0-43.323077s-31.507692-11.815385-43.323077 0L512 468.676923 326.892308 283.569231c-11.815385-11.815385-31.507692-11.815385-43.323077 0s-11.815385 31.507692 0 43.323077l185.107692 185.107692-185.107692 185.107692c-11.815385 11.815385-11.815385 31.507692 0 43.323077 7.876923 3.938462 15.753846 7.876923 23.630769 7.876923s15.753846-3.938462 19.692308-7.876923l185.107692-185.107692 185.107692 185.107692c3.938462 3.938462 11.815385 7.876923 19.692308 7.876923s15.753846-3.938462 19.692308-7.876923c11.815385-11.815385 11.815385-31.507692 0-43.323077L555.323077 512z\" fill=\"#EFEFEF\" p-id=\"2575\"></path></svg></div></div>");
	});
	$(document).on("click",".remove-handler",function(){
		var par = $(this).parent();
		par.remove();
	});
	
	function sendNewData(sendData){
		$.ajax({
			type:"POST",
			url:"test/stest.php",
			contentType: "application/json;charset=utf-8",
			data:JSON.stringify(sendData),
			cache:false,
			dataType:"json",
			success:function(){
				alert("创建成功");		
				console.log(sendData);
			},
			error:function(message){
				alert("提交失败!"+JSON.stringify(message));				
			}
		});
	}
	$(document).on("click","#task-btn",function(){
		var sendname = $(".task-creator-input .editor").text();
		var sendexecutor = "";
		sendexecutor = $("span[data-something=member]").text();
		var sendStart = $("input#startDate").val();
		var sendEnd = $("input#endDate").val();
		var sendProject = $("span[data-something=project]").text();
		var involveList = $("span.member-involve-list-item-name");
		var groupMember = new Array();
		involveList.each(function(index,element){
			involveArr.push($(this).text());
		});
		var sendMsg = "";
		if($("div.modal").attr("data-modal")==="modal3"){
			sendMsg = "{\"scheduleName\":"+"\""+sendname+"\""+",\"startDate\":"+"\""+sendStart+"\""+",\"closingDate\":"+"\""+sendEnd+"\""+",\"projectName\":"+"\""+sendProject+"\""+"}";
			
		}else{
			sendMsg = "{\"taskName\":"+"\""+sendname+"\""+",\"startDate\":"+"\""+sendStart+"\""+",\"closingDate\":"+"\""+sendEnd+"\""+",\"projectName\":"+"\""+sendProject+"\""+"}";
			
		}
		var msgObj = JSON.parse(sendMsg);
		msgObj.groupMember = involveArr;
		sendNewData(msgObj);
		
	});
	
	$(document).on("click",".tabs-bar-app",function(event){
		$(".tabs-bar-app").removeClass("active");
		$(this).addClass("active");
		var _this = $(this);
		var proName = $(".project-selector .button-name").text();
		if(_this.attr("data-role")=="tasks"){
			$(".schedule-board").remove();
			
			$(".project-view").find(".project-board").remove();
			$(".project-view").append([
"				<div class=\"project-board\">",
"					<div class=\"project-board-view\">",
"						<div class=\"project-board-wrap\">",
"							<div class=\"content\">",
"								<div class=\"project-board-body\">",
"									<div class=\"body-wrap\">",
"										<div class=\"task-list-view\" data-task=\"todo\">",
"											<div class=\"list-content\">",
"												<div class=\"status-name\">",
"													<div class=\"status-name-wrap\">",
"														<div class=\"title-list\">",
"															<span class=\"title-name\">待处理</span>",
"															<span class=\"title-num\"></span>",
"														</div>",
"													</div>",
"												</div>",
"												<div class=\"task-list-body\">",
"													<div class=\"task-list-body-list\">",
"														<div class=\"task-list-body-card\">",
"														</div>",
"													</div>",
"												</div>",
"											</div>",
"										</div>",
"										<div class=\"task-list-view\" data-task=\"doing\">",
"											<div class=\"list-content\">",
"												<div class=\"status-name\">",
"													<div class=\"status-name-wrap\">",
"														<div class=\"title-list\">",
"															<span class=\"title-name\">处理中</span>",
"															<span class=\"title-num\"></span>",
"														</div>",
"													</div>",
"												</div>",
"												<div class=\"task-list-body\">",
"													<div class=\"task-list-body-list\">",
"														<div class=\"task-list-body-card\">",
"														</div>",
"													</div>",
"												</div>",
"											</div>",
"										</div>",
"										<div class=\"task-list-view\" data-task=\"checking\">",
"											<div class=\"list-content\">",
"												<div class=\"status-name\">",
"													<div class=\"status-name-wrap\">",
"														<div class=\"title-list\">",
"															<span class=\"title-name\">审核中</span>",
"															<span class=\"title-num\"></span>",
"														</div>",
"													</div>",
"												</div>",
"												<div class=\"task-list-body\">",
"													<div class=\"task-list-body-list\">",
"														<div class=\"task-list-body-card\">",	
"														</div>",
"													</div>",
"												</div>",
"											</div>",
"										</div>",
"										<div class=\"task-list-view\" data-task=\"done\">",
"											<div class=\"list-content\">",
"												<div class=\"status-name\">",
"													<div class=\"status-name-wrap\">",
"														<div class=\"title-list\">",
"															<span class=\"title-name\">已完成</span>",
"															<span class=\"title-num\"></span>",
"														</div>",
"													</div>",
"												</div>",
"												<div class=\"task-list-body\">",
"													<div class=\"task-list-body-list\">",
"														<div class=\"task-list-body-card\">",
"														</div>",
"													</div>",
"												</div>",
"											</div>",
"										</div>",
"									</div>",
"								</div>",
"							</div>",
"						</div>",
"					</div>",
"				</div>"].join(""));
			showProjectView(proName);
		}else if(_this.attr("data-role")=="schedules"){
			$(".project-board").remove();
			$(".project-view").find(".schedule-board").remove();
			$(".project-view").append(["<div class=\"schedule-board\">",
"					<div class=\"schedule-box\">",
"						<ul class=\"schedule-time\">",
"							<li class=\"current\"><label schedule-date=\"2013\">9月20日</label></li>",
"						</ul>",
"						<ul class=\"schedule-list\">",
"							<div class=\"schedule-list-item\">",
"								<h3 id=\"2013\">9月20日</h3>",
"								<li schedule-id>",
"									<span class=\"during-time\">00:00~00:00</span>",
"									<p><span>暂无日程</span></p>",
"								</li>",
"							</div>",
"						</ul>",
"					</div>",
"				</div>"].join(""));
			showSchedule(proName);
		}
	});
	
	function getProjects(filterText){
		$.ajax({
			type:"GET",
			url:"test/projectTest.json",
			dataType:"json",
			timeout:10000,
			cache:false,
			data:JSON.stringify(filterText),
			success:function(data){
				$(".project-select-view").html("");
				if(filterText){
					$.each(data,function(i,n){
						filterText = filterText.replace(/\s+/g,"");
						var reg = new RegExp($.trim(filterText));
						if(reg.test(n["projectName"])){
						var newProject = $( "<li class=\"project-item  \"><div class=\"item-wrap\"><div class=\"project-img\"></div><span class=\"project-title selected\">"+n["projectName"]+"</span></div></li>");
						$(".project-select-view").append(newProject);
						}									
					});
					$(".project-dropdown li.project-item").removeClass("selected");
					$(".project-dropdown li.project-item").each(function(index){
						if($(this).text()==$(".project-selector .button-name").text()){
							$(this).addClass("selected");
						}
					});
				}else{
					$.each(data,function(i,n){
						var newProject = $( "<li class=\"project-item  \"><div class=\"item-wrap\"><div class=\"project-img\"></div><span class=\"project-title selected\">"+n["projectName"]+"</span></div></li>");
						$(".project-select-view").append(newProject);

				
					});
					$(".project-dropdown li.project-item").removeClass("selected");
					$(".project-dropdown li.project-item").each(function(index){
						if($(this).text()==$(".project-selector .button-name").text()){
							$(this).addClass("selected");
						}
					});
				}
			}
		});
	}
	
	$(document).on("click",".project-selector",function(e){
		getProjects();
		$(".project-dropdown").toggleClass("open");
		$(".project-selector").toggleClass("open");
	
		e.stopPropagation();
	});
	$(document).on("click",".project-dropdown li.project-item",function(e){
		$(".schedule-board").remove();
		var _this = $(this);
		$(".project-dropdown li").removeClass("selected");
		_this.addClass("selected");
		$(".project-selector .button-name").text(_this.text());
		$(".project-dropdown").removeClass("open");
		$(".project-selector").removeClass("open");
		e.stopPropagation();
		$(".project-board").remove();
		$(".project-view").append(taskBoard);
		$(".tabs-bar-app").removeClass("active");
		$("div[data-role=tasks]").addClass("active");
		showProjectView(_this.text());
	});
	$(document).on("click",function(event){
		if($(event.target).closest(".project-search").length>0){
	    
		}else{
			$(".project-dropdown").removeClass("open");
			$(".project-selector").removeClass("open");
		}
		
	});
	
	$(document).on("keyup",".project-dropdown.open .search-input",function(){
		_this = $(this);
		var fileterText = _this.val();
		getProjects(fileterText);
	});

	
	$(document).on("click",".select-box",function(e){
		var _this = $(this);
		var status = $( "<div class=\"status-dropdown\"><div class=\"status-dropdown-container\"><ul class=\"status-select-view\"><li class=\"status-item\" data-status=\"todo\" \"><div class=\"item-wrap\"><span class=\"status-title \">待处理</span></div></li><li class=\"status-item\"  data-status=\"doing\"\"><div class=\"item-wrap\"><span class=\"status-title \">处理中</span></div></li><li class=\"status-item\"  data-status=\"checking\"\"><div class=\"item-wrap\"><span class=\"status-title \">审核中</span></div></li><li class=\"status-item\" data-status=\"done\" \"><div class=\"item-wrap\"><span class=\"status-title \">已完成</span></div></li></ul></div></div>");
		_this.parent().siblings().remove();
		_this.parent().after(status);
		$(".status-dropdown").addClass("open");
		_this.addClass("open");
		$(".status-dropdown li.status-item").removeClass("selected");
		$(".status-dropdown li.status-item").each(function(index){
			if($(this).text()==_this.parents(".list-content").find(".title-name").text()){
				$(this).addClass("selected");
			}
		});
		
		e.stopPropagation();
	});
	
	$(document).on("click",".project-board-view .status-dropdown li.status-item",function(e){
		var _this = $(this);
		$(".status-dropdown li").removeClass("selected");
		_this.addClass("selected");
		$(".status-dropdown").removeClass("open");
		$(".select-box").removeClass("open");
		var aTask = _this.parents(".status-dropdown").siblings(".task-card-body").find(".task-content-text").text();
		var newStatus = _this.find(".status-title").text();
		var proName = $(".project-selector .button-name").text();
		var aTaskId = _this.parents(".status-dropdown").siblings(".task-card-body").find(".task-content-text").attr("data-id");
		changeStatus(aTask,aTaskId,newStatus,proName);
		$(".status-dropdown").remove();
		e.stopPropagation();
	});
	
	$(document).on("click",function(){
	    $(".status-dropdown").removeClass("open");
		$(".select-box").removeClass("open");
		$(".status-dropdown").remove();
	});

	function showProjectView(proName){
		$.ajax({
			type:"POST",
			url:"test/"+proName+"View.json",
			contentType: "application/json;charset=utf-8",
			data:JSON.stringify("{\"projectName\":"+"\""+proName+"\"}"),
			cache:false,
			dataType:"json",
			success:function(data){
				$(".task-list-body-card").empty();
				console.log(proName);
				var todoNum = 0;
				var doingNum = 0;
				var checkingNum = 0;
				var doneNum = 0;
				$.each(data,function(i,n){
					var taskInfo = n["startDate"]||n["closingDate"]?n["startDate"]+" - "+n["closingDate"]:"";
					var newTask = $( "<div class=\"task-card\"><div class=\"task-card-body\"><div class=\"select-box\"></div><div class=\"task-content\" ><span class=\"task-content-text\" data-id="+n["taskId"]+">"+n["taskName"]+"</span><div class=\"task-info\">"+taskInfo+"</div></div></div></div>");				
					if (taskInfo ==""){
						newTask.find(".task-info").hide();
					}
					var taskStatus = n["taskStatus"];
					if(taskStatus=="todo"){
						$("div[data-task=todo]").find(".task-list-body-card").append(newTask);
						todoNum++;
					}else if(taskStatus=="doing"){
						$("div[data-task=doing]").find(".task-list-body-card").append(newTask);
						doingNum++;
					}else if(taskStatus=="checking"){
						$("div[data-task=checking]").find(".task-list-body-card").append(newTask);
						checkingNum++;
					}else if(taskStatus=="done"){
						$("div[data-task=done]").find(".task-list-body-card").append(newTask);
						doneNum++;
					}
				});
				$("div[data-task=todo] .title-num").text(todoNum);
				$("div[data-task=doing] .title-num").text(doingNum);
				$("div[data-task=checking] .title-num").text(checkingNum);
				$("div[data-task=done] .title-num").text(doneNum);
			},
			error:function(message){
				alert("失败!"+JSON.stringify(message));
				
			}
		});
	}
	
	function showSchedule(proName){
		$.ajax({
			type:"POST",
			url:"test/"+proName+"Schedule.json",
			contentType: "application/json;charset=utf-8",
			data:JSON.stringify("{\"projectName\":"+"\""+proName+"\"}"),
			cache:false,
			dataType:"json",
			success:function(data){
				$(".schedule-time").empty();
				$(".schedule-list").empty();
				$.each(data,function(i,n){
					var scheduleTime = $(["<li><label schedule-date=\"2013\">9月20日</label></li>"].join(""));
					if(i==0){
						scheduleTime.addClass("current");
					}
					var scheduleItems = $(["<div class=\"schedule-list-item\">",
"								<h3 id=\"2013\">9月20日</h3>",
"							</div>"].join(""));
					scheduleTime.find("label").attr("schedule-date",n["scheduleDate"]);
					scheduleTime.find("label").text(n["scheduleDate"]);
					scheduleItems.find("h3").attr("id",n["scheduleDate"]);
					scheduleItems.find("h3").text(n["scheduleDate"]);
					$.each(n["scheduleGroup"],function(j,m){
						var item = $(["<li schedule-id>",
"									<span class=\"during-time\">00:00~00:00</span>",
"									<p><span class=\"schedule-name\">暂无日程</span></p>",
"								</li>"].join(""));
						item.attr("schedule-id",m["scheduleId"]);
						item.find(".during-time").text(m["startTime"]+" ~ "+m["endTime"]);
						item.find(".schedule-name").text(m["scheduleName"]);
						scheduleItems.find("h3").after(item);
					});
					$(".schedule-time").append(scheduleTime);
					$(".schedule-list").append(scheduleItems);
				});
			},
			error:function(message){
				alert("失败!"+JSON.stringify(message));
				
			}
		});
	}
	
	function changeStatus(aTask,aTaskId,newStatus,proName){
		$.ajax({
			type:"POST",
			url:"test/"+proName+"View.json",
			contentType: "application/json;charset=utf-8",
			data:JSON.stringify({"taskName":aTask,"taskId":aTaskId,"taskStatus":newStatus}),
			cache:false,
			dataType:"json",
			success:function(data){
				console.log(JSON.stringify({"taskName":aTask,"taskId":aTaskId,"taskStatus":newStatus}));
				showProjectView(proName);
			},
			error:function(message){
				alert("失败!"+JSON.stringify(message));
				
			}
		});
	}
	
	function setTiny(typeOfBoard){
		tinymce.init({
		  width:"70vw",
		  height:"300px",
		  selector: "moreinfo",
		  language: "zh_CN", //注意大小写,
		  plugins: "table,link,quickbars,image,code,lists,advlist,save",
		  menubar:false,
		  statusbar:false,
		  quickbars_insert_toolbar: 'quickimage quicktable',
		  toolbar: "undo redo save | fontsizeselect  bold italic underline code bullist numlist | alignleft aligncenter alignright justify | link image",
		
		  // 调用图片上传接口, 解析出图片访问url
		  images_upload_handler: function(blobInfo, succFun, failFun) {
		    var xhr, formData;
		    var file = blobInfo.blob(); //转化为易于理解的file对象
		    xhr = new XMLHttpRequest();
		    xhr.withCredentials = false;
		    xhr.open("POST", "upimg.php");
		    xhr.onload = function() {
		      var json;
		      if (xhr.status != 200) {
		        failFun("HTTP Error: " + xhr.status);
		        return;
		      }
		      resp = JSON.parse(xhr.responseText);
		      console.log("请求图片上传接口完成", resp);
		
		      if (resp.code != 0) {
		        failFun("上传失败: " + resp.err_desc);
		        return;
		      }
		
		      console.log("上传完成", resp.url);
		      succFun(resp.url);
		    };
		    formData = new FormData();
		    formData.append("file", file, file.name); //此处与源文档不一样
		    xhr.send(formData);
		  },
		  save_onsavecallback:function(event){
			var target = $(event.target);
			$(".add-info-now").addClass("hide");
			var newContent = $(tinymce.activeEditor.getContent());
			$(".add-info-after .add-info-text").html(newContent.html());
			$(".add-info-after").removeClass("hide");
			var username = "xxx";
			var scheduleId = $(".object-modal-view .object-title-editor").attr("data-id");
			var taskid = $(".object-modal-view .object-title-editor").attr("data-id");
			var projectName = $(".object-modal-view").find(".mybutton[data-something=project]").text();
			var taskName = $(".object-modal-view").find(".object-title-editor").text();
			var scheduleName = $(".object-modal-view").find(".object-title-editor").text();
			var role = $(".object-modal-view").find(".more-info").attr("data-role");
			var newitemData = newContent.html();
			var newData = "";
			if(typeOfBoard=="task"){
				newData = {"projectName":projectName,"taskName":taskName,"taskId":taskid,"newData":newitemData,"role":role};
				
				modifyItem(newData,"task");
			}else if(typeOfBoard=="schedule"){
				newData = {"projectName":projectName,"scheduleName":scheduleName,"scheduleId":scheduleId,"newData":newitemData,"role":role};
				
				modifyItem(newData,"schedule");
			}
			
		  }
		});
	}
	/******以下方法用于创建一个任务或者日程面板******/
	function createABoard(typeOfBoard,locationOfBoard){
		$(locationOfBoard).append(TSBoard);
		var m=window.innerWidth-document.body.clientWidth;//滚动条的宽度
		document.documentElement.style.paddingRight=m+"px";
		document.documentElement.style.overflowY = 'hidden';
		document.documentElement.style.overflowX = 'hidden';
		$(".object-modal-view").addClass("onlyforTask");
		$(".object-modal-view .closeBoardBtn").click(function(){
			$(".modal.fade.in").remove();
			$(".dropdown").removeClass("onlyforTaskBoard");
			$(".dropdown").removeClass("onlyforScheduleBoard");
			document.documentElement.style.overflowY = 'scroll';
			document.documentElement.style.paddingRight="0px";
		});
		if(typeOfBoard=="schedule"){
			//$(locationOfBoard).find("").remove();
			$(".board-type-name").text("日程");
			$(".dropdown").removeClass("onlyforTaskBoard");
			$(".object-modal-view").removeClass("onlyforTask");
			$(".object-modal-view").addClass("onlyforSchedule");
			$("#object-status").remove();
		}
		setTiny(typeOfBoard);
		
	}
	/********************************************/	
	
	/******以下方法用于显示每一个任务的面板******/

	function showTaskBoard(proName,aTask,aTaskId){
		var dataStr = "{\"projectName\":"+"\""+proName+"\""+",\"taskName\":"+"\""+aTask+"\"}";
		$.ajax({
			type:"POST",
			url:"test/task1Info.json",
			contentType:"application/json;charset=utf-8",
			data:JSON.stringify(dataStr),
			cache:false,
			dataType:"json",
			success:function(data){
				$(".modal.fade.in").remove();
				createABoard("task","#addIn");
				$(".dropdown").addClass("onlyforTaskBoard");
				if($(".add-info-before").text()=="暂时为空"){
					$(".add-info-now").addClass("hide");
					$(".add-info-after").addClass("hide");
				}else{
					$(".add-info-before").addClass("hide");
					$(".add-info-now").addClass("hide");
				}
				$.each(data,function(i,n){
					$(".object-title-editor").text(n["taskName"]);
					$(".object-title-editor").attr("data-id",aTaskId);
					var taskStatus = n["taskStatus"];
					console.log(taskStatus);
					var statusBtn = $(["<div class=\"status-button\" data-status="+taskStatus+"><span class=\"select-box\"></span><span class=\"status-name\">待处理</span></div>"].join(""));
					switch(taskStatus){
						case "doing":
							statusBtn.find(".status-name").text("处理中");
							break;
						case "checking":
							statusBtn.find(".status-name").text("审核中");
							break;
						case "done":
							statusBtn.find(".status-name").text("已完成");
							break;
						default:
							break;
							
					}
					$("#object-status .object-detail-right>div").empty().append(statusBtn);
					$("#startDate").val(n["startDate"]);
					$("#endDate").val(n["closingDate"]);
					$.each(n["groupMember"],function(j,m){
						var newInvolver = $(["<div class=\"member-involve-list-item\"><span class=\"member-involve-list-item-name\">"+m+"</span><div class=\"remove-handler\"><svg t=\"1599740573340\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2573\" width=\"12\" height=\"12\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#878787\" p-id=\"2574\"></path><path d=\"M555.323077 512l185.107692-185.107692c11.815385-11.815385 11.815385-31.507692 0-43.323077s-31.507692-11.815385-43.323077 0L512 468.676923 326.892308 283.569231c-11.815385-11.815385-31.507692-11.815385-43.323077 0s-11.815385 31.507692 0 43.323077l185.107692 185.107692-185.107692 185.107692c-11.815385 11.815385-11.815385 31.507692 0 43.323077 7.876923 3.938462 15.753846 7.876923 23.630769 7.876923s15.753846-3.938462 19.692308-7.876923l185.107692-185.107692 185.107692 185.107692c3.938462 3.938462 11.815385 7.876923 19.692308 7.876923s15.753846-3.938462 19.692308-7.876923c11.815385-11.815385 11.815385-31.507692 0-43.323077L555.323077 512z\" fill=\"#EFEFEF\" p-id=\"2575\"></path></svg></div></div>"].join(""));
						$(".member-involve-list").append(newInvolver);
					});
					$(".object-modal-view .mybutton[data-something=project]").text(n["projectName"]).after(["<span class=\"remove-btn\">x</span>"].join(""));
		
					$(".object-modal-view .mybutton[data-something=member]").text(n["taskExecutor"]).after(["<span class=\"remove-btn\">x</span>"].join(""));
				
					$(".object-modal-view .add-info-after .add-info-text").html(n["taskContent"]);
					
				});
			},
			error:function(message){
				alert("失败!"+JSON.stringify(message));
			}
		});
	}
	
	$(document).on("click",".task-content",function(){
		var _this = $(this);
		var proName = $(".project-selector .button-name").text();
		var taskName = _this.find(".task-content-text").text();
		var taskId = _this.find(".task-content-text").attr("data-id");
		$(".task-content").removeClass("openedTask");
		_this.addClass("openedTask");
		showTaskBoard(proName,taskName,taskId);
	});
	
	$(document).on("click",".more-info",function(){
		$(".add-info-now").removeClass("hide");
		$(".add-info-after").addClass("hide");
		$(".add-info-before").addClass("hide");
		tinymce.activeEditor.setContent($(".add-info-after").html());
	});
	/*********************************************/
	$(document).on("click",".card-grid .card-container",function(){
		/*
		$(".card-grid").on("click", ".card-container", function() {
			$(".card-grid").html("");
			var hello = $(this).text();
			$(".card-grid").html(hello);
		});
		*/
	   var proName = $(this).text();
	   $("#web-content").empty();
	   var proView = ["<div class=\"project-view\">",
"				<nav class=\"project-nav\">",
"					<div class=\"project-nav-wrap\">",
"						<div class=\"project-nav-first\">",
"							<div class=\"first-nav\">",
"								<button class=\"project-selector\" data-something=\"selector\">",
"									<span class=\"button-name\">选择项目</span>",
"								</button>",
"							</div>",
"						</div>",
"						<div class=\"project-nav-second\">",
"							<div class=\"second-nav\">",
"								<div class=\"tabs-bar-apps\">",
"									<div class=\"tabs-bar-app active\" data-role=\"tasks\">",
"											<span class=\"tabs-bar-item-title\" >任务</span>",
"									</div>",
"									<div class=\"tabs-bar-app\" data-role=\"schedules\">",
"											<span class=\"tabs-bar-item-title\">日程</span>",
"									</div>",
"									<div class=\"tabs-bar-app\" data-role=\"wechat\">",
"											<span class=\"tabs-bar-item-title\" >其他</span>",
"									</div>",
"								</div>",
"							</div>",
"						</div>",
"						<div class=\"project-nav-third\"></div>",
"				</nav>",
"				<div class=\"project-dropdown\">",
"					<div class=\"project-dropdown-container\">",
"						<div class=\"project-search\">",
"							<div class=\"search-input-wrap\">",
"								<div class=\"search-wrap\">",
"									<input class=\"search-input\" placeholder=\"搜索项目\">",
"								</div>",
"							</div>",
"						</div>",
"						<ul class=\"project-select-view\">",
"						</ul>",
"					</div>",
"				</div>",
"				",
"				<div class=\"project-board\">",
"					<div class=\"project-board-view\">",
"						<div class=\"project-board-wrap\">",
"							<div class=\"content\">",
"								<div class=\"project-board-body\">",
"									<div class=\"body-wrap\">",
"										<div class=\"task-list-view\" data-task=\"todo\">",
"											<div class=\"list-content\">",
"												<div class=\"status-name\">",
"													<div class=\"status-name-wrap\">",
"														<div class=\"title-list\">",
"															<span class=\"title-name\">待处理</span>",
"															<span class=\"title-num\"></span>",
"														</div>",
"													</div>",
"												</div>",
"												<div class=\"task-list-body\">",
"													<div class=\"task-list-body-list\">",
"														<div class=\"task-list-body-card\">",
"														</div>",
"													</div>",
"												</div>",
"											</div>",
"										</div>",
"										<div class=\"task-list-view\" data-task=\"doing\">",
"											<div class=\"list-content\">",
"												<div class=\"status-name\">",
"													<div class=\"status-name-wrap\">",
"														<div class=\"title-list\">",
"															<span class=\"title-name\">处理中</span>",
"															<span class=\"title-num\"></span>",
"														</div>",
"													</div>",
"												</div>",
"												<div class=\"task-list-body\">",
"													<div class=\"task-list-body-list\">",
"														<div class=\"task-list-body-card\">",
"														</div>",
"													</div>",
"												</div>",
"											</div>",
"										</div>",
"										<div class=\"task-list-view\" data-task=\"checking\">",
"											<div class=\"list-content\">",
"												<div class=\"status-name\">",
"													<div class=\"status-name-wrap\">",
"														<div class=\"title-list\">",
"															<span class=\"title-name\">审核中</span>",
"															<span class=\"title-num\"></span>",
"														</div>",
"													</div>",
"												</div>",
"												<div class=\"task-list-body\">",
"													<div class=\"task-list-body-list\">",
"														<div class=\"task-list-body-card\">",	
"														</div>",
"													</div>",
"												</div>",
"											</div>",
"										</div>",
"										<div class=\"task-list-view\" data-task=\"done\">",
"											<div class=\"list-content\">",
"												<div class=\"status-name\">",
"													<div class=\"status-name-wrap\">",
"														<div class=\"title-list\">",
"															<span class=\"title-name\">已完成</span>",
"															<span class=\"title-num\"></span>",
"														</div>",
"													</div>",
"												</div>",
"												<div class=\"task-list-body\">",
"													<div class=\"task-list-body-list\">",
"														<div class=\"task-list-body-card\">",
"														</div>",
"													</div>",
"												</div>",
"											</div>",
"										</div>",
"									</div>",
"								</div>",
"							</div>",
"						</div>",
"					</div>",
"				</div>",
"				",
"			</div>"].join("");
		$("#web-content").html(proView);
		$(".project-selector .button-name").text(proName);
		
		showProjectView(proName);
	});
	
	/*******一下方法用于更新面板内容********/
	
	function getTime(precision){
		var d = new Date();
		var vYear = d.getFullYear();
		var vMon = d.getMonth() + 1;
		var vDay = d.getDate();
		var h = d.getHours(); 
		var m = d.getMinutes(); 
		var se = d.getSeconds(); 
		var accumulateTime  = vYear+"-"+(vMon<10 ? "0" + vMon : vMon)+"-"+(vDay<10 ? "0"+ vDay : vDay)+" "+(h<10 ? "0"+ h : h)+":"+(m<10 ? "0" + m : m)+":"+(se<10 ? "0" +se : se);
		var nearlyTime = (vMon<10 ? "0" + vMon : vMon)+"-"+(vDay<10 ? "0"+ vDay : vDay)+" "+(h<10 ? "0"+ h : h)+":"+(m<10 ? "0" + m : m);
		if(precision=="big"){
			return accumulateTime;
		}else if(precision=="small"){
			return nearlyTime;
		}
	}
	
	function modifyItem(newData,typeOfBoard){
		if(typeOfBoard=="task"){
			newData.object = "task";
		}else if(typeOfBoard=="schedule"){
			newData.object = "schedule";
		}
		var sendData = newData;
		$.ajax({
			type:"POST",
			url:"test/stest.php",
			contentType: "application/json;charset=utf-8",
			data:JSON.stringify(sendData),
			cache:false,
			dataType:"json",
			success:function(data){
				if(typeOfBoard=="task"){
					console.log("以下为改变某一项发送给后端的数据(任务页面):")
					console.log(sendData);
					showTaskBoard(newData["projectName"],newData["taskName"],newData["taskId"]);
				}else if(typeOfBoard == "schedule"){
					console.log("以下为改变某一项发送给后端的数据(日程页面):")
					console.log(sendData);
					showScheduleBoard(newData["projectName"],newData["scheduleName"],newData["scheduleId"]);
				}
			},
			error:function(message){
				alert("失败!"+JSON.stringify(message));
				
			}
		});
	}
	
	$(document).on("keydown",".onlyforTask .object-title-editor",function(event){
		var e = event || window.event || arguments.callee.caller.arguments[0];
		var _this = $(this);
		var taskid = _this.attr("data-id");
		var oldTask = $(".openedTask").find(".task-content-text").text();
		if (e && e.keyCode == 13) {
			$(this).blur();
			var username = "xxx";
			var projectName = _this.parents(".object-modal-view").find("span[data-something=project]").text();
			var newitemData = _this.parents(".object-modal-view").find(".object-title-editor").text();
			var role = _this.attr("data-role");
			var newData = {"projectName":projectName,"taskName":oldTask,"taskId":taskid,"newData":newitemData,"role":role};
			modifyItem(newData,"task");
		}
	});
	
	$(document).on("click",".object-modal-view.onlyforTask  .status-item",function(){
		var _this = $(this);
		var username = "xxx";
		var taskid = $(".object-modal-view .object-title-editor").attr("data-id");
		_this.parents(".status-dropdown").siblings().find(".status-name").text(_this.text());
		$(".object-modal-view").find(".status-button").attr("data-status",_this.data("status"));
		var projectName = _this.parents(".object-modal-view").find("span[data-something=project]").text();
		var taskName = $(".object-modal-view").find(".object-title-editor").text();
		var newitemData = _this.data("status");
		var role = _this.parents("#object-status").find(".object-detail-right").attr("data-role");
		var newData = {"projectName":projectName,"taskName":taskName,"taskId":taskid,"newData":newitemData,"role":role};
		modifyItem(newData,"task");
	});
	
	$(document).on("click",".onlyforTaskBoard#involver-dropdown  .member-list-item",function(){
		var _this = $(this);
		var taskid =$(".object-modal-view .object-title-editor").attr("data-id");
		var timenow = getTime("small");
		var projectName =  $(".object-modal-view").find("span[data-something=project]").text();
		var taskName = $(".object-modal-view").find(".object-title-editor").text();
		var newitemData = _this.find(".item-name").text();
		var role = $(".object-modal-view").find(".add-handler").attr("data-role");
		var newData = {"projectName":projectName,"taskName":taskName,"taskId":taskid,"newData":newitemData,"role":role};
		modifyItem(newData,"task");
		
	});
	
	$(document).on("click",".object-modal-view.onlyforTask  .member-involve-list-item .remove-handler",function(){
		var username = "xxx";
		var _this = $(this);
		var taskid = $(".object-modal-view .object-title-editor").attr("data-id");
		var projectName =  $(".object-modal-view").find("span[data-something=project]").text();
		var taskName = $(".object-modal-view").find(".object-title-editor").text();
		var newitemData = _this.siblings().text();
		var role = $(".object-modal-view").find(".add-handler").attr("data-role");
		var newData = {"projectName":projectName,"taskName":taskName,"taskId":taskid,"newData":newitemData,"role":"remove"+role};
		modifyItem(newData,"task");
	});
	
	$(document).on("click",".onlyforTaskBoard#project-dropdown .member-list-item",function(){
		
		var username = "xxx";
		var taskid =$(".object-modal-view .object-title-editor").attr("data-id");
		var _this = $(this);
		var oldProject = $(".project-view").find(".project-selector .button-name").text();
		var taskName = $(".object-modal-view").find(".object-title-editor").text();
		var newitemData = _this.find(".item-name").text();
		var role = $(".object-modal-view").find(".task-location-text .mybutton").attr("data-role");
		var newData = {"projectName":oldProject,"taskName":taskName,"taskId":taskid,"newData":newitemData,"role":role};
		modifyItem(newData,"task");
		
	});
	
	$(document).on("click",".object-modal-view.onlyforTask  .task-location-text .remove-btn",function(){
		var username = "xxx";
		var _this = $(this);
		var taskid =$(".object-modal-view .object-title-editor").attr("data-id");
		var oldProject = $(".project-view").find(".project-selector .button-name").text();
		var taskName = $(".object-modal-view").find(".object-title-editor").text();
		var role = $(".modal-view").find(".project-info .object-detail-name").attr("data-role");
		var newData =  {"projectName":oldProject,"taskName":taskName,"taskId":taskid,"role":"remove"+role};
		modifyItem(newData,"task");
		
	});
	
	
	$(document).on("click",".object-modal-view.onlyforTask  #startDate",function(){
		var _this = $(this);
		var role = _this.attr("data-role");
		$('.object-modal-view #startDate').datetimepicker({
		    onSelectTime: function(dateText, inst) {
				var projectName = $(".object-modal-view").find(".task-location-text .mybutton").text();
				var taskName = $(".object-modal-view").find(".object-title-editor").text();
				var newitemData = $("#startDate").val();
				var taskid = $(".object-modal-view .object-title-editor").attr("data-id");
				var newData = {"projectName":projectName,"taskName":taskName,"taskId":taskid,"newData":newitemData,"role":role};
				modifyItem(newData,"task");
				   
		    }
		}); 
		
	
		
	});
	$(document).on("click"," .object-modal-view.onlyforTask #endDate",function(){
		var role = $(this).attr("data-role");
		$('.object-modal-view #endDate').datetimepicker({
		    onSelectTime: function(dateText, inst) {
				var projectName = $(".object-modal-view").find(".task-location-text .mybutton").text();
				var taskName = $(".object-modal-view").find(".object-title-editor").text();
				var taskid = $(".object-modal-view .object-title-editor").attr("data-id");
				var newitemData = $("#endDate").val();
				var newData = {"projectName":projectName,"taskName":taskName,"taskId":taskid,"newData":newitemData,"role":role};
				modifyItem(newData,"task");
			}
		}); 
		
	
		
	});
	
	/*************************************/

	/***************以下方法用于切换日程日期*******/
	$(document).on("click",".schedule-board label",function(){
		console.log("click");
		$('.schedule-time>li').removeClass('current');
			
		$(this).parent('li').addClass('current');
			
		var date = $(this).attr('schedule-date');
			
		$('#'+date).parent().prevAll('div').slideUp(800);
			
		$('#'+date).parent().slideDown(800).nextAll('div').slideDown(800);
	});
	
	/************以下方法用于显示日程页面**********/
	
	function showScheduleBoard(proName,aSchedule,aScheduleId){
		var dataStr = "{\"projectName\":"+"\""+proName+"\""+",\"scheduleName\":"+"\""+aSchedule+"\""+",\"scheduleId\":"+"\""+aScheduleId+"\"}";
		console.log(JSON.parse(dataStr));
		$.ajax({
			type:"POST",
			url:"test/scheduleInfo.json",
			contentType:"application/json;charset=utf-8",
			data:JSON.stringify(dataStr),
			cache:false,
			dataType:"json",
			success:function(data){
				$(".modal.fade.in").remove();
				createABoard("schedule","#addIn");
				$(".dropdown").addClass("onlyforScheduleBoard");
				if($(".add-info-before").text()=="暂时为空"){
					$(".add-info-now").addClass("hide");
					$(".add-info-after").addClass("hide");
				}else{
					$(".add-info-before").addClass("hide");
					$(".add-info-now").addClass("hide");
				}
				$.each(data,function(i,n){
					$(".object-title-editor").text(n["scheduleName"]);
					$(".object-title-editor").attr("data-id",aScheduleId);
					$(".object-modal-view.onlyforSchedule #startDate").val(n["startTime"]);
					$(".object-modal-view.onlyforSchedule #endDate").val(n["endTime"]);
					$.each(n["groupMember"],function(j,m){
						var newInvolver = $(["<div class=\"member-involve-list-item\"><span class=\"member-involve-list-item-name\">"+m+"</span><div class=\"remove-handler\"><svg t=\"1599740573340\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2573\" width=\"12\" height=\"12\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#878787\" p-id=\"2574\"></path><path d=\"M555.323077 512l185.107692-185.107692c11.815385-11.815385 11.815385-31.507692 0-43.323077s-31.507692-11.815385-43.323077 0L512 468.676923 326.892308 283.569231c-11.815385-11.815385-31.507692-11.815385-43.323077 0s-11.815385 31.507692 0 43.323077l185.107692 185.107692-185.107692 185.107692c-11.815385 11.815385-11.815385 31.507692 0 43.323077 7.876923 3.938462 15.753846 7.876923 23.630769 7.876923s15.753846-3.938462 19.692308-7.876923l185.107692-185.107692 185.107692 185.107692c3.938462 3.938462 11.815385 7.876923 19.692308 7.876923s15.753846-3.938462 19.692308-7.876923c11.815385-11.815385 11.815385-31.507692 0-43.323077L555.323077 512z\" fill=\"#EFEFEF\" p-id=\"2575\"></path></svg></div></div>"].join(""));
						$(".member-involve-list").append(newInvolver);
					});
					$(".object-modal-view .mybutton[data-something=project]").text(n["projectName"]).after(["<span class=\"remove-btn\">x</span>"].join(""));
								
					$(".object-modal-view .add-info-after .add-info-text").html(n["scheduleContent"]);
				});
			},
			error:function(message){
				alert("失败!"+JSON.stringify(message));
			}
		});
	}
	
	$(document).on("click",".schedule-box .schedule-list li p",function(){
		var _this = $(this);
		var proName = $(".project-selector .button-name").text();
		var scheduleName = _this.find(".schedule-name").text();
		var scheduleId = _this.parent().attr("schedule-id");
		$(".schedule-box .schedule-list li p").removeClass("openedSchedule");
		_this.addClass("openedSchedule");
		showScheduleBoard(proName,scheduleName,scheduleId);
	});
	
	
	/********以下方法用于更改日程内容*******/
	$(document).on("keydown",".object-modal-view.onlyforSchedule .object-title-editor",function(){
		var e = event || window.event || arguments.callee.caller.arguments[0];
		var _this = $(this);
		var scheduleId = _this.attr("data-id");
		var oldSchedule = $(".openedSchedule").find(".schedule-name").text();
		if (e && e.keyCode == 13) {
			$(this).blur();
			var username = "xxx";
			var projectName = _this.parents(".object-modal-view").find("span[data-something=project]").text();
			var newitemData = _this.parents(".object-modal-view").find(".object-title-editor").text();
			var role = _this.attr("data-role");
			var newData = {"projectName":projectName,"scheduleName":oldSchedule,"scheduleId":scheduleId,"newData":newitemData,"role":role};
			modifyItem(newData,"schedule");
		}
	});
	
	$(document).on("click",".object-modal-view.onlyforSchedule  #startDate",function(){
		var _this = $(this);
		var role = _this.attr("data-role");
		$('.object-modal-view #startDate').datetimepicker({
		    onSelectTime: function(dateText, inst) {
				var projectName = $(".object-modal-view").find(".task-location-text .mybutton").text();
				var scheduleName = $(".object-modal-view").find(".object-title-editor").text();
				var newitemData = $("#startDate").val();
				var scheduleId = $(".object-modal-view .object-title-editor").attr("data-id");
				var newData = {"projectName":projectName,"scheduleName":scheduleName,"scheduleId":scheduleId,"newData":newitemData,"role":role};
				modifyItem(newData,"schedule");
				   
		    }
		}); 
		
	
		
	});
	$(document).on("click"," .object-modal-view.onlyforSchedule #endDate",function(){
		var role = $(this).attr("data-role");
		$('.object-modal-view #endDate').datetimepicker({
		    onSelectTime: function(dateText, inst) {
				var projectName = $(".object-modal-view").find(".task-location-text .mybutton").text();
				var scheduleName = $(".object-modal-view").find(".object-title-editor").text();
				var newitemData = $("#endDate").val();
				var scheduleId = $(".object-modal-view .object-title-editor").attr("data-id");
				var newData = {"projectName":projectName,"scheduleName":scheduleName,"scheduleId":scheduleId,"newData":newitemData,"role":role};
				modifyItem(newData,"schedule");
			}
		}); 
		
	
		
	});
	$(document).on("click",".onlyforScheduleBoard#involver-dropdown  .member-list-item",function(){
		var _this = $(this);
		var scheduleId =$(".object-modal-view .object-title-editor").attr("data-id");
		var timenow = getTime("small");
		var projectName =  $(".object-modal-view").find("span[data-something=project]").text();
		var scheduleName = $(".object-modal-view").find(".object-title-editor").text();
		var newitemData = _this.find(".item-name").text();
		var role = $(".object-modal-view").find(".add-handler").attr("data-role");
		var newData = {"projectName":projectName,"scheduleName":scheduleName,"scheduleId":scheduleId,"newData":newitemData,"role":role};
		modifyItem(newData,"schedule");
		
	});
	
	$(document).on("click",".object-modal-view.onlyforSchedule  .member-involve-list-item .remove-handler",function(){
		var username = "xxx";
		var _this = $(this);
		var scheduleId = $(".object-modal-view .object-title-editor").attr("data-id");
		var projectName =  $(".object-modal-view").find("span[data-something=project]").text();
		var scheduleName = $(".object-modal-view").find(".object-title-editor").text();
		var newitemData = _this.siblings().text();
		var role = $(".object-modal-view").find(".add-handler").attr("data-role");
		var newData = {"projectName":projectName,"scheduleName":scheduleName,"scheduleId":scheduleId,"newData":newitemData,"role":"remove"+role};
		modifyItem(newData,"schedule");
	});
	
	$(document).on("click",".onlyforScheduleBoard#project-dropdown .member-list-item",function(){
		
		var username = "xxx";
		var scheduleId =$(".object-modal-view .object-title-editor").attr("data-id");
		var _this = $(this);
		var oldProject = $(".project-view").find(".project-selector .button-name").text();
		var scheduleName = $(".object-modal-view").find(".object-title-editor").text();
		var newitemData = _this.find(".item-name").text();
		var role = $(".task-location-text").find(".mybutton").attr("data-role");
		var newData = {"projectName":oldProject,"scheduleName":scheduleName,"scheduleId":scheduleId,"newData":newitemData,"role":role};
		modifyItem(newData,"schedule");
		
	});
	
	$(document).on("click",".object-modal-view.onlyforSchedule  .task-location-text .remove-btn",function(){
		var username = "xxx";
		var _this = $(this);
		var scheduleId =$(".object-modal-view .object-title-editor").attr("data-id");
		var oldProject = $(".project-view").find(".project-selector .button-name").text();
		var scheduleName = $(".object-modal-view").find(".object-title-editor").text();
		var role = $(".modal-view").find(".project-info .object-detail-name").attr("data-role");
		var newData =  {"projectName":oldProject,"scheduleName":scheduleName,"scheduleId":scheduleId,"role":"remove"+role};
	
		modifyItem(newData,"schedule");
		
	});
	
});


/*
function closeTaskCreatorView(){
	var closer = document.getElementsByClassName("modal fade in")[1];
	closer.style.display = "none";
	document.documentElement.style.overflowY = 'scroll'; 
	document.documentElement.style.paddingRight="0px";
}
function showTaskCreatorView(){
	var m=window.innerWidth-document.body.clientWidth;//滚动条的宽度
	document.documentElement.style.paddingRight=m+"px";
	var opener = document.getElementsByClassName("modal fade in")[1];
	opener.style.display = "flex";
	document.getElementsByClassName("next-overlay-wrapper")[0].style.display = "none";
	document.documentElement.style.overflowY = 'hidden'; 
}
$('.mybutton').click(function(event){
			    $('div[data-something=' + $(this).data('something') + ']').toggle();
				console.log($(this).data('somthing'));
				stopBubble(event);
				$(document).bind("click",function(e){ 
				var target = $(e.target); 
				if(target.closest(".dropdown").length == 0){ 
				$(".dropdown").hide(); 
				} 
				}) 
			});
*/

