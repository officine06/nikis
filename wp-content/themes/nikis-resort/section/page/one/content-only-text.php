<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Nikis_Resort_2.0
 */

$title_size = get_sub_field('dimensione_titolo');
$title = get_sub_field('titolo');
$text = get_sub_field('testo');
$image = get_sub_field('immagine');
?>


<div class="grid-container">
	<section class="section__container section__container--auto section__container--only-text">
		<div class="grid-x">
			<div class="large-12 medium-12 small-12 column">
				<div class="section__container--text">
				<?php if($title): ?>
					<h2 class="title__section
						<?php if($title_size == 'big'): ?>title__section--big<?php endif; ?>
						<?php if($title_size == 'small'): ?>title__section--small<?php endif; ?>
					"><?php echo $title; ?></h2>
				<?php endif; ?>
				<?php if($text): ?>
					<?php echo $text; ?>
				<?php endif; ?>
				</div>
			</div>
		</div>
	</section>
</div>