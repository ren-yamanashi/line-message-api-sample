.PHONY: 
	cancel-rich-menu 
	create_rich_menu_alias_b
	create_rich_menu_alias_a
	create_rich_menu_a
	create_rich_menu_b 
	delete_rich_menu 
	get_default_rich_menu_id 
	get-rich-menu
	set_default_rich_menu
	upload_rich_menu_img_a
	upload_rich_menu_img_b


cancel-rich-menu:
	bash ./scripts/cancel-rich-menu.sh

create_rich_menu_alias_a:
	bash ./scripts/create_rich_menu_alias_a.sh

create_rich_menu_alias_b:
	bash ./scripts/create_rich_menu_alias_b.sh

create_rich_menu_a:
	bash ./scripts/create_rich_menu_a.sh

create_rich_menu_b:
	bash ./scripts/create_rich_menu_b.sh

delete_rich_menu:
	bash ./scripts/delete_rich_menu.sh

get_default_rich_menu_id:
	bash ./scripts/get_default_rich_menu_id.sh

get-rich-menu:
	bash ./scripts/get-rich-menu.sh

set_default_rich_menu:
	bash ./scripts/set_default_rich_menu.sh

upload_rich_menu_img_b:
	bash ./scripts/upload_rich_menu_img_b.sh
	
upload_rich_menu_img_a:
	bash ./scripts/upload_rich_menu_img_a.sh



