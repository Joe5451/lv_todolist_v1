<template>
    <section>
        <main-head></main-head>
        <div class="container max-w-screen-lg px-4 py-8 mx-auto">
            <div class="flex mb-5">
                <button class="primary_btn mr-5" id="todo_add_btn">新增待辦 <i class="far fa-plus-square"></i></button>
                <button class="primary_btn" id="tag_add_btn">新增標籤 <i class="fas fa-tags"></i></button>
            </div>
            
            <div class="index_container rounded-lg">
                <div class="todo_container">
                    <div class="todo_head">
                        <div class="todo_head_title">全部</div>
                        <div class="todo_header_btn_container">
                            <button class="todo_head_btn active" type="unfinished">待完成</button>
                            <button class="todo_head_btn" type="finished">完成</button>
                            <button class="todo_head_btn" type="data">數據</button>
                        </div>
                    </div>
                    <div class="todo_body">
                        <div class="todolist_container" id="unfinished_todo">
                            <div class="todolist_item">
                                <div class="todolist_item_category_tag">Side Project</div>
                                <div class="todolist_item_title">待辦 todolist side project 完成</div>
                                <div class="todolist_item_content">完成 side project</div>
                                <div class="todolist_item_btn_group">
                                    <button class="todolist_item_btn finish">
                                        <i class="fas fa-check-circle"></i>
                                    </button>
                                    <button class="todolist_item_btn delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="todolist_item">
                                <div class="todolist_item_category_tag">Side Project</div>
                                <div class="todolist_item_title">待辦 todolist side project 完成</div>
                                <div class="todolist_item_content">完成 side project</div>
                                <div class="todolist_item_btn_group">
                                    <button class="todolist_item_btn finish">
                                        <i class="fas fa-check-circle"></i>
                                    </button>
                                    <button class="todolist_item_btn delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="todolist_item">
                                <div class="todolist_item_category_tag">Side Project</div>
                                <div class="todolist_item_title">待辦 todolist side project 完成</div>
                                <div class="todolist_item_content">完成 side project</div>
                                <div class="todolist_item_btn_group">
                                    <button class="todolist_item_btn finish">
                                        <i class="fas fa-check-circle"></i>
                                    </button>
                                    <button class="todolist_item_btn delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="todolist_item">
                                <div class="todolist_item_category_tag">Side Project</div>
                                <div class="todolist_item_title">待辦 todolist side project 完成</div>
                                <div class="todolist_item_content">完成 side project</div>
                                <div class="todolist_item_btn_group">
                                    <button class="todolist_item_btn finish">
                                        <i class="fas fa-check-circle"></i>
                                    </button>
                                    <button class="todolist_item_btn delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="todolist_container hidden" id="finished_todo">
                            <div class="todolist_item">
                                <div class="todolist_item_category_tag">Side Project</div>
                                <div class="todolist_item_title">待辦 todolist side project 完成</div>
                                <div class="todolist_item_content">完成 side project</div>
                                <div class="todolist_item_btn_group">
                                    <button class="todolist_item_btn redo">
                                        <i class="fas fa-redo-alt"></i>
                                    </button>
                                    <button class="todolist_item_btn delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="todolist_item">
                                <div class="todolist_item_category_tag">Side Project</div>
                                <div class="todolist_item_title">待辦 todolist side project 完成</div>
                                <div class="todolist_item_content">完成 side project</div>
                                <div class="todolist_item_btn_group">
                                    <button class="todolist_item_btn redo">
                                        <i class="fas fa-redo-alt"></i>
                                    </button>
                                    <button class="todolist_item_btn delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="todolist_item">
                                <div class="todolist_item_category_tag">Side Project</div>
                                <div class="todolist_item_title">待辦 todolist side project 完成</div>
                                <div class="todolist_item_content">完成 side project</div>
                                <div class="todolist_item_btn_group">
                                    <button class="todolist_item_btn redo">
                                        <i class="fas fa-redo-alt"></i>
                                    </button>
                                    <button class="todolist_item_btn delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="todolist_item">
                                <div class="todolist_item_category_tag">Side Project</div>
                                <div class="todolist_item_title">待辦 todolist side project 完成</div>
                                <div class="todolist_item_content">完成 side project</div>
                                <div class="todolist_item_btn_group">
                                    <button class="todolist_item_btn redo">
                                        <i class="fas fa-redo-alt"></i>
                                    </button>
                                    <button class="todolist_item_btn delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="todo_data_container hidden" id="todo_data">
                            <div class="todo_data_content">
                                <div class="todo_data_item">
                                    <div class="todo_data_item_title">總數：</div>
                                    <div class="todo_data_item_text">
                                        <span class="todo_data_number">20</span>  件
                                    </div>
                                </div>
                                <div class="todo_data_item">
                                    <div class="todo_data_item_title">完成：</div>
                                    <div class="todo_data_item_text">
                                        <span class="todo_data_number">12</span>  件
                                    </div>
                                </div>
                                
                            </div>

                            <div class="progress_container">
                                <div id="progress" class="progress"></div>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
​
<script>
export default {
    mounted() {
        $('.todo_head_btn').click(function() {
            let type = $(this).attr('type');

            $('.todo_head_btn').removeClass('active');
            $(this).addClass('active');

            $('.todolist_container').addClass('hidden');
            $('.todo_data_container').addClass('hidden');

            switch(type)
            {
                case 'unfinished':
                    $('#unfinished_todo').removeClass('hidden');
                    break;
                case 'finished':
                    $('#finished_todo').removeClass('hidden');
                    break;
                case 'data':
                    $('#todo_data').removeClass('hidden');
                    startProgress('progress');

                    break;
                default:
                    break;
            }
        });

        function startProgress(elementId) {
            const wrapper = document.getElementById(elementId);
            const barCount = 50;
            const percent1 = 50 * 60/100;
            wrapper.innerHTML = '';

            for (let index = 0; index < barCount; index++) {
                const className = index < percent1 ? 'selected1' : '';
                wrapper.innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
            }

            wrapper.innerHTML += `<p class="selected percent-text text1">60%</p>`
        }
    }
};
</script>